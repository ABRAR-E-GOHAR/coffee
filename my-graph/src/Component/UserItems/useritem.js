import React from 'react';
import './useritem.css';
import { itemSendToReducer } from "../Store/Action/action";
import { connect } from "react-redux";
import { orderData } from "../Store/Action/action";
import UserPosts from "../pagination/userPosts";
import { paginationFun } from "../Store/Action/action";
import Pagination from "../pagination/pagination";


class UserItem extends React.Component {

  state = {
    currentPage: 1,
    postPerPage: 8
  }

  productObj = {
    profile: null,
    description: null,
    price: null,
    category: null,
    quantity: null
  }

  componentDidMount() {
    fetch("/Products", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.props.sendAllItems(data);
      });
  }

  // get current post
  getIndex = () => {
    let indexofLastPost = this.state.currentPage * this.state.postPerPage;
    let indexofFirstPost = indexofLastPost - this.state.postPerPage;
    let currentPosts = this.props.products.slice(indexofFirstPost, indexofLastPost);
    this.props.sendArrayForPagination(currentPosts);
  }

  paginate = (number) => {
    this.setState({
      ...this.state,
      currentPage: number
    });
    this.getIndex();
  }


  addToCartOrder = (event) => {
    event.preventDefault();
    this.productObj.profile = event.target.getAttribute("profile");
    this.productObj.description = event.target.previousElementSibling.innerText;
    this.productObj.price = event.target.previousElementSibling.previousElementSibling.innerText;
    this.productObj.category = event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    this.productObj.quantity = 1;
    this.props.sendOrderData(this.productObj);
  }


  render() {
    this.getIndex();
    return <>
      <UserPosts addToCart={this.addToCartOrder} />
      <Pagination postPerPage={this.state.postPerPage}
        totalPosts={this.props.products.length}
        paginate={this.paginate}
      />
    </>
  }
}

function mapStateToProps(state) {
  return {
    products: state.getItemReducer.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendAllItems: (data) => { dispatch(itemSendToReducer(data)) },
    sendOrderData: (data) => { dispatch(orderData(data)) },
    sendArrayForPagination: (data) => { dispatch(paginationFun(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);