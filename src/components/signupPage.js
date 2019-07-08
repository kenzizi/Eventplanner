import React from "react";
import Navbar from "./navbar";
import SignupForm from "./signupComponents/signupForm";
import Alert from './Alert'
import Footer from './homeComponents/footer'


const signupPage  =() =>  {
  
    return (
      <div>
        <Navbar />
        <div className="signup-section">
        <Alert />
          <div className="row tessss">
            <SignupForm />
          
          </div>
        </div>
        <Footer />
      </div>
    );
  
}



export default signupPage;
