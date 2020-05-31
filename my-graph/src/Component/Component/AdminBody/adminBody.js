import React from 'react';
import './adminBody.css';
import AdminNavbar from "../AdminNavBar/adminNavBar";
import AdminGraph from '../adminBodyGraphs/adminGraph';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function AdminBody(props) {

    if (props.adminAuthenticated === false) {
        return <Redirect to="/adminLogin" />
    }
    if (props.isAuthenticated === true) {
        return <Redirect to="/dashboard" />
    }
    return (<div id='adminBodyContainer'>
        <AdminNavbar />
        <AdminGraph />
    </div>)

}

function mapStateToProps(state) {
    return {
        adminAuthenticated: state.adminReducer.adminAuthenticated,
        isAuthenticated: state.signupReducer.isAuthenticated
    }
}

export default connect(mapStateToProps)(AdminBody);