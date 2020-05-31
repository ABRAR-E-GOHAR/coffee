import React from 'react';
import './adminlogin.css';
import { adminLogin } from "../Store/Action/action";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import CopyNav from '../CopiedNavBar/copyNav';


class AdminLogIn extends React.Component {

  state = {
    username: "",
    password: ""
  }

  submitData = (event) => {
    event.preventDefault();
    this.props.sendAdminData(this.state);
  }

  updateState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });

  }
  render() {
    if (this.props.adminAuthenticated === true) {
      return <Redirect to="/admindashboard" />
    }
    if (this.props.isAuthenticated === true) {
      return <Redirect to="/dashboard" />
    }
    return <>
    <CopyNav/>
      <div className="login-page">
        <div className="form">
          <form className="login-form">

            <input type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.updateState}
            />

            <input type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.updateState}
            />

            <button onClick={this.submitData}>login</button>

          </form>
        </div>
      </div>
    </>
  }
}

function mapStateToProps(store) {
  return {
    adminAuthenticated: store.adminReducer.adminAuthenticated,
    isAuthenticated: store.signupReducer.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendAdminData: (data) => { dispatch(adminLogin(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogIn);