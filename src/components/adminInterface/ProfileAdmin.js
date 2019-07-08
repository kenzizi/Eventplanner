import React, { useState } from 'react'
import UserInfo from '../profilComponent/UserInfo'
import { Link } from 'react-router-dom'
import IMG from '../../images/event-exxample.jpeg'
import UserDetails from '../profilComponent/UserDetails'
import { DatePicker, List } from "antd";
import Navbar from '../navbar'
import moment from "moment";
import { connect } from 'react-redux'
import { updateProfile } from '../../actions/userProfile'
const dateFormatList = ["YYYY-MM-DD", "DD-MM-YY"];


const ProfileAdmin = ({ user, updateProfile }) => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    birdthday: "",
    phonenumber: "",
    avatar: {},
    imageName: "Update image"

  })
  const handleInputs = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })

  }
  const handleDate = (value, dateString) => {
    console.log("start date", dateString);
    setFormValues({ ...formValues, birdthday: dateString })
  };
  const removeFalsy = (obj) => {
    let newObj = {};
    Object.keys(obj).forEach((prop) => {
      if (obj[prop]) { newObj[prop] = obj[prop]; }
    });
    return newObj;
  };
  const handleUplaod = e => {
    setFormValues({ ...formValues, avatar: e.target.files[0], imageName: e.target.files[0].name })
    console.log(formValues)



  }
  const handleProfileUpdate = () => {
    let result = removeFalsy(formValues)
    updateProfile(result)


  }
  const { firstname, lastname, phonenumber, birdthday, email, imageName, avatar } = formValues
  return (
    <div>

      <div className="profile-section">


        <div className="container">
          <div className="row"  >
            <div className="col-md-6">
              <img src={user.avatar} alt="the file here" className="profile-img" />

              <div className="form-group">
                <label htmlFor="exampleFormControlFile1">Update Profile Picture</label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input .forminputs"
                    id="customFile"
                    onChange={handleUplaod}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="customFile"

                  >
                    {imageName}
                  </label>
                </div>
              </div>

            </div>




            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="phone" className="mt-4 ">First name</label>
                  <input defaultValue={user.name} className="form-control profile-inputs" type="text" placeholder="Firstname" id="firstname" name="firstname" onChange={handleInputs} />
                  <label htmlFor="lastname" className="mt-4 ">Last name</label>
                  <input defaultValue={user.lastname} className="form-control profile-inputs" type="text" placeholder="Lastname" id="lasname" name="lastname" onChange={handleInputs} />
                  <label htmlFor="email" className="mt-4 ">Email address</label>
                  <input defaultValue={user.email} type="email" className="form-control profile-inputs" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={handleInputs} />
                  <label htmlFor="birthday" className="mt-4 ">Date of Birth</label> <br />
                  <DatePicker
                    defaultValue={moment(user.dateOfbirth, dateFormatList[0])}
                    format={dateFormatList}
                    id="birthday"
                    className="profile-inputs-date"
                    onChange={handleDate}
                  /><br />
                  <label htmlFor="phone" className="mt-4 ">Phone number</label>
                  <input defaultValue={user.phoneNumber} className="form-control profile-inputs" type="Number" placeholder="Phone Number" id="phone" name="phonenumber" onChange={handleInputs} />
                  <button onClick={handleProfileUpdate} type="button" className="btn btn-primary">Update Profile</button>

                </div>

                <div className="col-md-6">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}
export default connect(mapStateToProps, { updateProfile })(ProfileAdmin)
