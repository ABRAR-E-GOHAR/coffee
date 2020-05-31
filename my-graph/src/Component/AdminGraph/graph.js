import React from 'react';
import './graph.css'
import { Animated } from "react-animated-css";
import Image from './Images/g.png';
import Pie from './Images/pie.png';
import Money from './Images/money.png';
import Group from './Images/group3.png';
import { Link } from "react-router-dom";


export default class Graph extends React.Component {

    state = {
        users: [],
        orders: [],
        products: []
    }

    componentDidMount() {
        this.getUserCount();
        this.getOrderCount();
        this.getProductsCount();
    }

    getUserCount = () => {
        fetch("/signup", {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    users: data
                });
            });
    }

    getOrderCount = () => {
        fetch("/conformOrder", {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    orders: data
                });
            });
    }

    getProductsCount = () => {
        fetch("/Products", {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    products: data
                });
            });
    }

    render() {
        return <React.Fragment>

            <p id="admintexture">
                <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={false}>
                    All The Customers Data and Their Detail is  Here!!
            </Animated>
            </p>
            {/* Remaining code  */}
            <div className="container">
                <div className="row">

                    <div className="col-sm">
                        <div className="card text-white bg-primary mb-3" style={{ maxWidth: "23rem" }}>
                            <div className="card-header"><img src={Group} className="Img" /></div>
                            <div className="card-body">
                                <h3 className="card-title">Total Customers</h3>
                                <h2 className="card-text">{this.state.users.length}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">

                        <div className="card text-white bg-success mb-3" style={{ maxWidth: "23rem" }}>
                            <div className="card-header">
                                <Link to="/adminuserdata"><img src={Image} className="Img" /></Link>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Total Orders</h3>
                                <h2 className="card-text">{this.state.orders.length}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="card text-white bg-danger mb-3" style={{ maxWidth: "23rem" }}>
                            <div className="card-header">
                                <Link to="/adminUploadProduct"><img src={Money} className="Img" /></Link>
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">Total Products</h3>
                                <h2 className="card-text">{this.state.products.length}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </React.Fragment>
    }
}

