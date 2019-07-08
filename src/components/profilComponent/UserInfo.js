import React from 'react'
import {Link} from 'react-router-dom'
 const UserInfo = () => {
    return (
        <div>
        
        <div className="container bootstrap snippet">
            <div className="row">
                  <div className="col-sm-10"><h1>User name</h1></div>
                <div className="col-sm-2"><Link href="/users" className="pull-right"><img title="profile image" className="img-circle img-responsive" src="http://www.gravatar.com/avatar/28fd20ccec6865e2d5f0e1f4446eb7bf?s=100" /></Link></div>
            </div>
            <div className="row">
                  <div className="col-sm-3">
                      
        
              <div className="text-center">
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                <h6>Upload a different photo...</h6>
                <input type="file" className="text-center center-block file-upload" />
              </div>
              
              </div>
              </div>
              </div>
        
        </div>
    )
}

export default UserInfo