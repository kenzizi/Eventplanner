import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../adminNav'
import Footer from '../homeComponents/footer'


import ProfileAdmin from './ProfileAdmin';

 const AdminInterface = () => {
    
        return (
           <div>
              <Navbar/>


<div className="container-fluid spacing-nav">
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
      <p className="display-4">Dashboard Admin</p>
      <ProfileAdmin />
    </div> 
  </div> 
</div>

           </div>


        )
   
}

export default AdminInterface