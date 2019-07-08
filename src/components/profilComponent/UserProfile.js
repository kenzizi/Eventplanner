import React ,{useEffect} from 'react'

import { DatePicker, List } from "antd";
import store from '../../store'
import {connect} from 'react-redux'
import {getUserbyID} from '../../actions/User'

import moment from "moment";
import Spinner from '../adminInterface/spinner';

const dateFormatList = ["YYYY-MM-DD", "DD-MM-YY"];

const UserProfile = ({id,user}) => {
    
    
    useEffect(() => {
        store.dispatch(getUserbyID(id))
        console.log(user)
      }, [] ) 

      
    return user===null ? <Spinner /> :
        user.map((user)=> { 
          return   ( <div className="profile-section">
    
        <div className="container">
        <div className="row"  >
        <div className="col-md-6">
              <img src ={user.avatar } alt="the file here" className="profile-img" />
              

        </div>




        <div className="col-md-6">
           <div className="row">
              <div className="col-md-6">
                  <label htmlFor="phone" className="mt-4 ">First name</label>
                  <input defaultValue={user.name} className="form-control profile-inputs" type="text" placeholder="Firstname" id="firstname" name="firstname" />
                  <label htmlFor="lastname" className="mt-4 ">Last name</label>
                  <input  defaultValue={user.lastname} className="form-control profile-inputs" type="text" placeholder="Lastname" id="lasname" name="lastname"  />
                  <label htmlFor="email" className="mt-4 ">Email address</label>
                  <input  defaultValue={user.email} type="email" className="form-control profile-inputs" id="email" aria-describedby="emailHelp" placeholder="Enter email"  name="email"  />
                  <label htmlFor="birthday" className="mt-4 ">Date of Birth</label> <br/>
                  <DatePicker
                  defaultValue={moment(user.dateOfbirth, dateFormatList[0])}
                  format={dateFormatList}
                  id="birthday"  
                  className="profile-inputs-date"
                  
                  /><br />
                  <label htmlFor="phone" className="mt-4 ">Phone number</label>
                  <input  defaultValue={user.phoneNumber} className="form-control profile-inputs" type="Number" placeholder="Phone Number" id="phone" name="phonenumber"   />
                  

              </div>

              <div className="col-md-6">
              
              </div>
           </div>
        </div>
      </div>
        </div>
        </div>
        )}

        )
}
const mapStateToProps = state => {
    return {
      user : state.user
    }
  }

export default  connect(mapStateToProps,{getUserbyID})(UserProfile)
