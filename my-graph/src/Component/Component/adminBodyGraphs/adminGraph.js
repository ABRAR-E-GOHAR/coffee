import React from 'react';
import './adminGraph.css';
import { uploadProduct } from "../Store/Action/action";
import { getErrors } from "../Store/Action/alertAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAdmin } from "../Store/Action/action";

class AdminGraph extends React.Component {

    state = {
        uploadedImage: null,
        price: null,
        category: null,
        description: null
    }

    updateState = () => {
        this.setState({
            uploadedImage: this.refs.uploadedImage.files[0],
            price: this.refs.price.value,
            category: this.refs.category.value,
            description: this.refs.description.value
        });
    }

    submitFormData = (event) => {
        event.preventDefault();
        const { uploadedImage, price, category, description } = this.state;
        if (price === null || category === null || description === null) {
            this.props.sendErrors("Fill All Fields");
        }
        else if (uploadedImage === "") {
            this.props.sendErrors("Please Upload Profile Picture");
        }
        else {
            this.props.sendFormData(this.state);
        }
    }

    uploadProduct = (event) => {
        event.preventDefault();
        this.refs.uploadDiv.style.display = "block";
    }

    cancelUpload = () => {
        this.refs.uploadDiv.style.display = "none";
        this.setState({
            uploadedImage: null,
            price: null,
            category: null,
            description: null
        });
    }

    adminLogoutFunction = (event) => {
        event.preventDefault();
        this.props.sendAdminLogout("ADMIN_FAIL");
    }


    render() {
        return <>
            {/* hoverable side buttons */}

            <div id="mySidenav">
                <Link to="/adminUploadProduct">
                    <a href="/adminUploadProduct" id="AllProductd">Uploaded Products</a>
                </Link>
                <a href="/#" id="AddProduct" onClick={this.uploadProduct}>Add Product</a>
                <Link to="/adminuserdata">
                    <a href="/adminuserdata" id="comingOrders">Coming Orders</a>
                </Link>
                <Link to="/admintable">
                    <a href="/admintable" id="adminsidetable">Table Booking</a>
                </Link>
                <a href="/#" id="logout" onClick={this.adminLogoutFunction}>Log Out</a>
            </div>


            {/* upload form */}

            <div ref="uploadDiv" id='adminValueForm' className="animated zoomIn">
                <img alt="" id="cancelBtn" src="/cancel.png" onClick={this.cancelUpload}></img>
                <div id='adminSideImage'>
                    {
                        this.state.uploadedImage ? <img alt="" id="uploadImg" src={URL.createObjectURL(this.state.uploadedImage, { oneTimeOnly: false })} /> : null
                    }
                </div><br />

                <label id="imgLable">
                    <input type="file" size="60"
                        onChange={this.updateState}
                        ref="uploadedImage"
                    />
                    Upload a file
                </label><br />

                <form id="form_Upload_Product">

                    <input type="number" id="fname" placeholder="Product Price" className='adminDataForm'
                        onChange={this.updateState}
                        ref="price"
                        value={this.state.price}
                    /><br />

                    <select id="country" ref="category" className='adminSlection' onChange={this.updateState} value={this.state.category}>
                        <option>Select Category</option>
                        <option >Tea</option>
                        <option>Coffee</option>
                        <option>Fast Food</option>
                    </select><br />

                    <input type="text" id="lname" placeholder="Product Description" className='adminDataForm'
                        onChange={this.updateState}
                        ref="description"
                        value={this.state.description}
                    /><br /><br />


                    <input type="submit"
                        className='adminDataForm1'
                        onClick={this.submitFormData}
                    />
                </form>
            </div>
        </>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendFormData: (data) => { dispatch(uploadProduct(data)) },
        sendErrors: (data) => { dispatch(getErrors(data)) },
        sendAdminLogout: (data) => { dispatch(logoutAdmin(data)) }
    }
}

export default connect(null, mapDispatchToProps)(AdminGraph);