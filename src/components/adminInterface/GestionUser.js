import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Table, Button, Modal, ModalBody, ModalFooter, ModalHeader, Input, FormGroup, Label } from 'reactstrap';
import axios from 'axios'
import store from '../../store'
import {getUserbyID} from '../../actions/User'
import Navbar from '../adminNav'
import Footer from '../homeComponents/footer'





 class GestionUser extends Component {
    
    state = {
        users:[]
    }

    dispatcher = (id) => {
      //console.log('twaaaaaaaaaaaaaaa',id)
      store.dispatch(getUserbyID(id))
   }

    componentWillMount(){
        this.refreshList()
    }

    refreshList(){
        axios.get('http://localhost:4000/api/users').then((response) => {
            this.setState({
              users: response.data
            })
          })
    }

    deleteUser = (id) => {
        axios.delete('http://localhost:4000/api/users/' + id).then((response) => {
          this.refreshList()
        })
      }
    
      
    
    
    
    
    render(){
        let use = this.state.users.map((user)=>{
            return (
            <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.RegistrationDate}</td>
            <td>{user.dateOfbirth}</td>
            <td>{user.phoneNumber}</td>
            <td>{user.gender}</td>
            
            <td>
                <Link  onClick={() => this.dispatcher(user._id)} to ={`/profile-user/${user._id}`}><Button color="success" size="sm" className="mr-2" >View</Button></Link>
                <Button color="danger" size="sm" className="mr-2" onClick={() => this.deleteUser(user._id)} >DELETE</Button>
            </td>
        </tr>)
        })


    return (
       <div>
         <Navbar />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
         <div className="container-fluid">
  <div className="row">    
    <div id="admin-sidebar" className="col-md-2 p-x-0 p-y-3">
      <ul className="sidenav admin-sidenav list-unstyled">
        <li><Link to="/admin-interface/profile">Profile</Link></li>
        <li><Link to="/admin-interface/deleteUser">Delete User</Link></li>
        <li><Link to="/admin-interface/DeleteEvent">Delete Event</Link></li>
      </ul>
    </div> 
    <div id="admin-main-control" className="col-md-10 p-x-3 p-y-1">
      <div className="content-title m-x-auto">
        <i className="fa fa-dashboard" /> Dashboard
      </div>
      <p className="display-4">Gestion User</p>
        
        <div className="App Container">
        <Table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Registration Date</th>
                <th>Birth Date</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            {use}
        </tbody>
        </Table> 
        </div> 


    </div> 
  </div> 
</div>

       </div>
    )
}
 }

export default GestionUser
