import React from 'react';
import './userNavbar.css';
import { logoutUser } from "../Store/Action/action";
import { connect } from "react-redux";
import { filterItemsFunc } from "../Store/Action/action";
import { itemSendToReducer } from "../Store/Action/action";
import { Link } from "react-router-dom";

class UserHeader extends React.Component {

    itemObj = {
        category: null
    }

    myFunction = () => {
        var x = document.getElementById("userTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    userLogoutFunc = (event) => {
        event.preventDefault();
        this.props.sendUserLogoutData("LOGIN_FAIL");
    }

    filterItems = (event) => {
        event.preventDefault();
        let itemName = event.target.name;
        this.itemObj.category = itemName;
        this.props.sendFilterCategory(this.itemObj);
    }

    getAllItem = (event) => {
        event.preventDefault();
        fetch("/Products", {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                this.props.sendAllItems(data);
            });
    }

    render() {
        return <>
            <div className="topnav2" id="myTopnav1">
                <Link to='/' className='active'> <img src='./loge.png' id='navImag2' /> <i> <b id='logoText2'> <span id='changingColorNav'>B</span>lack<span id='changingColorNav1' >S</span>team<span id='changingColorNav2'>C</span>afee</b></i></Link>
                <Link><span className='navNews2' onClick={this.getAllItem}>All Caegory</span></Link>
                <Link><a className='navNews2' name="Tea" onClick={this.filterItems}>Tea</a></Link>
                <Link><a className='navNews2' name="Coffee" onClick={this.filterItems}>Coffee</a></Link>
                <Link> <a className='navNews2' name="Fast Food" onClick={this.filterItems}>Fast Food</a></Link>
                <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendUserLogoutData: (data) => { dispatch(logoutUser(data)) },
        sendFilterCategory: (data) => { dispatch(filterItemsFunc(data)) },
        sendAllItems: (data) => { dispatch(itemSendToReducer(data)) }
    }
}

export default connect(null, mapDispatchToProps)(UserHeader);