import React from 'react';
import './userdashboard.css';
import UserHeader from "../UserHeader/userHeader";
import UserItem from '../UserItems/useritem';
import NavBar from "../userNavbar/userNavbar";
import Footer from '../HomeFooter/homefooter';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class UserDashBoard extends React.Component {
    render() {
        if (this.props.isAuthenticated === false) {
            return <Redirect to="/login" />
        }
        return < >
            <NavBar />
            <UserHeader />
            <UserItem />
            <Footer/>
        </>
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.signupReducer.isAuthenticated
    }
}

export default connect(mapStateToProps)(UserDashBoard);