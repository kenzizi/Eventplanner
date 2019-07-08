import React, { Component } from 'react'
import {Link} from  'react-router-dom'

 class footer extends Component {
    render() {
        return (
            <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <h6>About</h6>
                  <p className="text-justify">This site was created by <i> Karim Kenzizi </i>and <i> Mokhless Jaziri </i> 
                  It’s not only a fun way to meet with new people,but it provides you with instant conversation material to build up your social skills and relationships in a much more comfortable way.
 
                  
                  </p>
                </div>
      
                <div className="col-xs-6 col-md-3">
                  <h6>Mokhless</h6>
                  <ul className="footer-links">
                  <li><Link className="facebook" to="https://www.facebook.com/profile.php?id=100004317338831"><i class="fab fa-facebook"></i></Link></li>
                  <li><Link className="linkedin" href="#"><i class="fab fa-linkedin-in"></i></Link></li>  
                  </ul>
                </div>
      
                <div className="col-xs-6 col-md-3">
                  <h6>Karim</h6>
                  <ul className="footer-links">
                  <li><Link className="facebook" href="https://www.facebook.com/kkenzizi" to="https://www.facebook.com/kkenzizi"><i class="fab fa-facebook"></i></Link></li>
                  <li><Link className="linkedin" href="#"><i class="fab fa-linkedin-in"></i></Link></li> 
                  </ul>
                </div>
              </div>
              <hr />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                  <p className="copyright-text">Copyright &copy; 2019 All Rights Reserved by 
               <Link href="#">   Karim-Mokhless</Link>
                  </p>
                </div>
      
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons">
                    
                      
                  </ul>
                </div>
              </div>
            </div>
      </footer>
        )
    }
}
export default footer 
