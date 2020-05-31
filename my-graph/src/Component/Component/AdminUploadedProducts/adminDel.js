import React from 'react';
import './adminDel.css';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { productUpdated } from "../Store/Action/action";
import { productDelete } from "../Store/Action/action";


class AdminDeletion extends React.Component {
    state = {
        products: [],
    }

    productObj = {
        _id: null,
        description: null,
        price: null,
        category: null
    }

    componentDidMount() {
        fetch("/Products", {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data });
            });
    }

    showUpdationForm = (event) => {
        this.refs.UpdationForm.style.display = 'block';
        // set value to object
        this.productObj._id = event.target.id;
        this.productObj.description = event.target.parentNode.previousElementSibling.innerText;
        this.productObj.price = event.target.parentNode.previousElementSibling.previousElementSibling.innerText;
        this.productObj.category = event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
        // get value from object and set to form
        this.refs.category.value = this.productObj.category;
        this.refs.price.value = this.productObj.price;
        this.refs.description.value = this.productObj.description;
    }
    windowCloser = () => {
        this.refs.UpdationForm.style.display = 'none';
    }

    updateProduct = (event) => {
        event.preventDefault();
        this.productObj.category = this.refs.category.value;
        this.productObj.price = this.refs.price.value;
        this.productObj.description = this.refs.description.value;
        this.props.sendProductData(this.productObj);

        // get product after updateion
        fetch("/Products", {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data });
            });
    }

    deleteProduct = (event) => {
        event.preventDefault();
        this.productObj._id = event.target.id;
        this.props.sendDeleteData(this.productObj);

        // get product after deletion
        fetch("/Products", {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data });
            });
    }
    render() {
        if (this.props.adminAuthenticated === false) {
            return <Redirect to="/adminlogin" />
        }
        if (this.props.isAuthenticated === true) {
            return <Redirect to="/dashboard" />
        }
        return <>

            {/* form code starts here !! */}
            <div ref="UpdationForm" id='UpdationForm'>
                <span onClick={this.windowCloser} className="updationClose" title="Close Modal">&times;</span>
                <form className='updationModalContent'>
                    <div className='updationContainer'>
                        <h1 className='updationFormText'>Update</h1>
                        <p className='updationFormText'>The Product Information</p>
                        <hr id='updationHorizontalLine' />

                        <label className='updationFormText'><b>Product Category</b></label>
                        <input type="text"
                            placeholder="Category"
                            required
                            className='adminUpdationInputFeilds'
                            ref="category"
                        />

                        <label className='updationFormText'><b>Product Price</b></label>
                        <input type="number"
                            placeholder="Price"
                            required
                            className='adminUpdationInputFeilds'
                            ref="price"
                        />


                        <label className='updationFormText'><b>Product Description</b></label>
                        <input type="text"
                            placeholder="Description"
                            required
                            className='adminUpdationInputFeilds'
                            ref="description"
                        />

                        <button type="submit" className="updationButtons" id='updateAlone' onClick={this.updateProduct}>Update</button>

                    </div>

                </form>

            </div>



            {/* All Picture div's are here */}

            <div>
                <h1 id='adminDeletionh1'>Hello Admin! Here You Can Delete What Ever You Want!</h1>
                {
                    this.state.products.length === 0 ? <h3 id="noProductMsg">No Products Yet</h3> : null
                }
                <div className="adminDashCards">
                    {
                        this.state.products.map((item) => {
                            return <>
                                <div className="adminCard"><img alt="" className="productImges" src={item.profile} />
                                    <div className="productDataDiv animated zoomIn" >
                                        <h2>{item.category}</h2>
                                        <h3>{item.price}</h3>
                                        <h4>{item.description}</h4>
                                        <div id="buttonDivAdmin">
                                            <button id={item._id} className="adminCardBtn" onClick={this.showUpdationForm}>Update</button>
                                            <button id={item._id} className="adminCardBtn" onClick={this.deleteProduct}>delate</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>


        </>
    }
}

function mapStateToProps(state) {
    return {
        adminAuthenticated: state.adminReducer.adminAuthenticated,
        isAuthenticated: state.signupReducer.isAuthenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendProductData: (data) => { dispatch(productUpdated(data)) },
        sendDeleteData: (data) => { dispatch(productDelete(data)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDeletion);