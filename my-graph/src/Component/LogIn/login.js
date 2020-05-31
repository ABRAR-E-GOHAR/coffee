import React from 'react';
import './login.css';
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import { getErrors } from "../Store/Action/alertAction";
import { connect } from "react-redux";
import { loginUser } from "../Store/Action/action";
import { Redirect } from "react-router-dom";

class LogIn extends React.Component {

    state = {
        email: "",
        password: ""
    }

    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitData = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        if (email === "" || password === "") {
            this.props.sendErrors("Fill All Fields")
        }
        else {
            this.props.sendLoginData(this.state);
        }
    }

    render() {
        if (this.props.adminAuthenticated === true) {
            return <Redirect to="admindashboard" />
        }
        if (this.props.isAuthenticated === true) {
            return <Redirect to="dashboard" />
        }
        return <div>
            <form className="logInBox" >

                <h1>Login</h1>
                <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>

                    <input
                        type="email"
                        placeholder="email"
                        className='logInText'
                        name="email"
                        onChange={this.updateState}
                        value={this.state.email}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className='logInText'
                        name="password"
                        onChange={this.updateState}
                        value={this.state.password}
                    />

                    <input
                        type="submit"
                        value="Login"
                        id='logInBtn'
                        onClick={this.submitData}
                    />

                    <Link to='/signup' id='ligInLink'>Create an Account</Link>
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
function mapDispatchToProps(dispatch) {
    return {
        sendLoginData: (data) => { dispatch(loginUser(data)) },
        sendErrors: (data) => { dispatch(getErrors(data)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);