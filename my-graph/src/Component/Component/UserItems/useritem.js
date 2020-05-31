import React from 'react';
import './useritem.css';
import { itemSendToReducer } from "../Store/Action/action";
import { connect } from "react-redux";
import { orderData } from "../Store/Action/action";
import ScrollAnimation from 'react-animate-on-scroll';

class UserItem extends React.Component {

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
    return <>
      <div class="userDashCards">
        {
          this.props.products.map((item) => {
            return <>
              <ScrollAnimation animateIn="fadeInUp">
                <div class="userCard"><img alt="" className="productsImg" src={item.profile} />
                  <div className="dataDiv animated zoomIn" >
                    <h2>{item.category}</h2>
                    <h3>{item.price}</h3>
                    <h4>{item.description}</h4>
                    <button className="cartBtn" profile={item.profile} onClick={this.addToCartOrder}>Add To Cart</button>
                  </div>
                </div>
              </ScrollAnimation>
            </>
          })
        }
      </div>
    </>
  }
}

function mapStateToProps(state) {
  return {
    products: state.getItemReducer.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendAllItems: (data) => { dispatch(itemSendToReducer(data)) },
    sendOrderData: (data) => { dispatch(orderData(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);