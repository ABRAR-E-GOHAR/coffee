import React from 'react';
import './signup.css';
import { connect } from "react-redux";
import { registerUser } from "../Store/Action/action";
import { getErrors } from "../Store/Action/alertAction";
import { Redirect, Link } from "react-router-dom";
import { Animated } from "react-animated-css";

class SignUp extends React.Component {

    state = {
        username: "",
        address: "",
        email: "",
        password: "",
        conformPassword: ""
    }

    submit = (event) => {
        event.preventDefault();
        const { username, address, email, password, conformPassword } = this.state;
        if (username === "" || address === "" || email === "" || password === "" || conformPassword === "") {
            this.props.sendErrors("Fill All Fields");
        }
        else if (this.state.password !== this.state.conformPassword) {
            this.props.sendErrors("Password Not Match");
        }
        else if (this.state.password.length < 6) {
            this.props.sendErrors("Password Is Too Short");
        }
        else {
            this.props.sendSignupData(this.state);
            this.props.sendErrors("User Register Successfully");
        }
    }

    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        if (this.props.adminAuthenticated === true) {
            return <Redirect to="admindashboard" />
        }
        if (this.props.isAuthenticated === true) {
            return <Redirect to="dashboard" />
        }
        return <div id='signUpCover'>
            <form className="signUpBox">
                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
                    <h1>Sign up</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className='signUpTextFeilds'
                        name="username"
                        onChange={this.updateState}
                        value={this.state.username}
                    />

                    <input
                        type="text"
                        placeholder="Email"
                        className='signUpTextFeilds'
                        id='checkingSignUpValidation'
                        name="email"
                        onChange={this.updateState}
                        value={this.state.email}
                    />

                    <input
                        type="text"
                        placeholder="Address"
                        className='signUpTextFeilds'
                        name="address"
                        onChange={this.updateState}
                        value={this.state.address}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className='signUpTextFeilds'
                        id='signUpPassword'
                        name="password"
                        onChange={this.updateState}
                        value={this.state.password}
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className='signUpTextFeilds'
                        id='signUpComparePassword'
                        name="conformPassword"
                        onChange={this.updateState}
                        value={this.state.conformPassword}
                    />

                    <input
                        type="submit"
                        value="Create Account"
                        id='signUpBtn'
                        onClick={this.submit} />

                    <Link to="/login" id='givingPathToLogIn'> Already have one?</Link>
                </Animated>
            </form>
        </div>
    }
}
const mapStateToProps = (store) => {
    return {
        isAuthenticated: store.signupReducer.isAuthenticated,
        adminAuthenticated: store.adminReducer.adminAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendSignupData: (data) => { dispatch(registerUser(data)) },
        sendErrors: (data) => { dispatch(getErrors(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);