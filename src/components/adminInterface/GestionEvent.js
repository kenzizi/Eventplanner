import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Table, Button, Modal, ModalBody, ModalFooter, ModalHeader, Input, FormGroup, Label } from 'reactstrap';
import store from '../../store'
import {connect} from 'react-redux'
import {getEventbyID} from '../../actions/event'
import Navbar from '../adminNav'
import Footer from '../homeComponents/footer'





class GestionEvent extends Component {

  state = {
    events:[]
}

dispatcher = (id) => {
   //console.log('twaaaaaaaaaaaaaaa',id)
   store.dispatch(getEventbyID(id))
}

componentWillMount(){
    this.refreshList()
}

refreshList(){
    axios.get('http://localhost:4000/api/evenement').then((response) => {
        this.setState({
          events: response.data
        })
      })
}

deleteEvent = (id) => {
    axios.delete('http://localhost:4000/api/evenement/' + id).then((response) => {
      this.refreshList()
    })
  }




   render(){
    let use = this.state.events.map((event)=>{
      return (
      <tr key={event._id}>
      <td>{event.userMail}</td>
      
      <td>{event.name}</td>
      <td>{event.date}</td>
      <td>{event.eventDesc}</td>
      <td>{event.categorie}</td>

      
      
      <td>
          <Link onClick={() => this.dispatcher(event._id)} to ={`/eventdetails/${event._id}`}><Button color="success" size="sm" className="mr-2"  >View</Button></Link>
          <Button color="danger" size="sm" className="mr-2" onClick={() => this.deleteEvent(event._id)} >DELETE</Button>
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
      <p className="display-4">Gestion Event</p>
      <div className="App Container">
        <Table>
        <thead>
            <tr>
                <th>UserMail</th>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                
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
    )}
}


export default connect(null,{getEventbyID})(GestionEvent)
