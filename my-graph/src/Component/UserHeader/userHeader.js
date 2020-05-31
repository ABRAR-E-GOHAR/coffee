import React from 'react';
import './userHeader.css';
import Image from './Images/singleFoodImage.jpg';
import { Link } from "react-router-dom";
import { logoutUser } from "../Store/Action/action";
import { connect } from "react-redux";

class UserNavBar extends React.Component {

    userLogoutFunc = (event) => {
        event.preventDefault();
        this.props.sendUserLogoutData("LOGIN_FAIL");
    }
    render() {
        return <>
            <div className="animated zoomIn" >
                <div id="extraBtnDiv">
                    <div className="extraButtons">
                        <Link to="/usertable"><a href="/#">Book Table</a></Link>
                    </div>
                    <div className="extraButtons">
                        <Link to="/mycart"><a href="/#">My Cart</a></Link>
                    </div>
                    <div className="extraButtons">
                        <Link><a href="/#" onClick={this.userLogoutFunc}>LogOut</a></Link>
                    </div>
                </div>
                <img alt="" src={Image} id='userNavBackImage' />
                <div className="userNavCentered" id='userCentralText'><b id='frontText'>A Taste Of Love And World Of Imagination  </b><br /> <em id='BackTexture'>Coffee is a beverage that puts one to sleep when not drank</em><br />
                    <b id='logotext'><q>BlackSteamCafe</q></b></div>
            </div>
        </>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendUserLogoutData: (data) => { dispatch(logoutUser(data)) },
    }
}

export default connect(null, mapDispatchToProps)(UserNavBar);