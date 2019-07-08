import React, { useEffect } from 'react'
import Navbar from './navbar'
import Introduction from './homeComponents/introduction'
import Categories from './homeComponents/eventCategories'
import Timetable from './homeComponents/timetable'
import Sponsors from './homeComponents/sponsors'
import Footer from './homeComponents/footer'
import {connect} from 'react-redux'
import store from '../store'
import {loadUser} from '../actions/auth'
import {Redirect} from 'react-router-dom'

const  Home = ({loadUser,user}) =>{
    useEffect(()=> {
        store.dispatch(loadUser)
    },[])


    // console.log(user!==null&&'the user is ',user.name)
    if(user && user.role==="Admin"){
        return <Redirect to="/admin-interface/profile" />
    }
    return (
        <div>
            <Navbar />
            <Introduction />
            <Categories />
            <Timetable />
            <Sponsors />
            <Footer />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        user : state.auth.user
    }
}
export default connect (mapStateToProps,{loadUser})(Home)
