import React from 'react';
import './myCart.css';
import { Animated } from "react-animated-css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { removeOrder } from "../Store/Action/action";
import { getErrors } from "../Store/Action/alertAction";
import { orderConfirmed } from "../Store/Action/action";

class MyCart extends React.Component {

  state = {
    myOrders: []
  }
  // ================================================================
  orderObj = {
    _id: null
  }
  // ================================================================

  productDetails = (event) => {
    event.preventDefault();
    if (this.state.myOrders.length === 0) {
      this.props.sendErrors("Please Select Order");
    }
    else {
      document.getElementById('myCartFirstDiv').style.display = 'none';
      document.getElementById('myCartSecondDiv').style.display = 'block';
    }
  }
  // ================================================================

  OrderBackInfo = (event) => {
    event.preventDefault();
    document.getElementById('myCartSecondDiv').style.display = 'none';
    document.getElementById('myCartFirstDiv').style.display = 'block';
  }
  // fetch data ================================================================
  fetchData = () => {
    fetch("/orders", {
      method: "GET",
      headers: {
        "Content-Type": "appllication/json",
        "x-auth-token": localStorage.getItem("token")
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          myOrders: data
        });
        let bill = 0;
        for (let item of this.state.myOrders) {
          bill += (item.quantity * item.price);
        }
        this.refs.bill.value = bill;
      });
  }
  //get all select order================================================================


  componentDidMount() {
    this.fetchData();
  }

  // generate bill================================================================

  generateBill = (event) => {
    event.preventDefault();
    let index = event.target.getAttribute("index");
    let value = event.target.value;
    this.state.myOrders[index].quantity = value;
    let bill = 0;
    for (let item of this.state.myOrders) {
      bill += (item.quantity * item.price);
    }
    this.refs.bill.value = bill;
  }

  //remove order ================================================================

  deleteOrder = (event) => {
    event.preventDefault();
    this.orderObj._id = event.target.id;
    this.props.sendOrderRemoveData(this.orderObj);

    // refresh page
    this.fetchData();
  }

  //confirm order ================================================================

  conformOrderObj = {
    orders: [null],
    address: null,
    phone: null,
    city: null,
    bill: null
  }
  sendConformOrder = (event) => {
    event.preventDefault();
    this.conformOrderObj.orders = this.state.myOrders;
    this.conformOrderObj.address = this.refs.address.value;
    this.conformOrderObj.phone = this.refs.phone.value;
    this.conformOrderObj.city = this.refs.city.value;
    this.conformOrderObj.bill = this.refs.bill.value;
    if (this.conformOrderObj.address === "" || this.conformOrderObj.phone === "" || this.conformOrderObj.city === "") {
      this.props.sendErrors("Fill All Fields");
    }
    else {
      this.props.sendOrderConformed(this.conformOrderObj);
      // delete orders after conform
      fetch("/orders", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "x-auth-token": localStorage.getItem("token")
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        });
      this.fetchData();
    }
  }
  // Render==========================================
  render() {
    if (this.props.isAuthenticated === false) {
      return <Redirect to="/login" />
    }
    return <div id='myCartBackground'>
      <div id='myCartFirstDiv'>
        <table className='myCartTable'>
          <tr>
            <th className='cartTableHeadings'>Product</th>
            <th className='cartTableHeadings'>Quantity</th>
            <th className='cartTableHeadings'>Price</th>
            <th className='cartTableHeadings'>Date</th>
            <th className='cartTableHeadings'>Delete</th>
          </tr>
          {
            this.state.myOrders.map((item, index) => {
              return <> <tr>
                <td className='myCartTableData'><img alt="" src={item.profile} className='myCartData' /></td>
                <td className='myCartTableData'><input index={index} onChange={this.generateBill} type='number' className='myCartData' min="1" /></td>
                <td className='myCartTableData'><input type='text' className='myCartData' value={item.price} /></td>
                <td className="myCartTableData"><input type="text" className="myCartData" value={item.date} /></td>
                <td className='myCartTableData'><button className='myCartData' id={item._id} onClick={this.deleteOrder}>Del</button></td>
              </tr>
              </>
            })
          }
        </table>
        <div id='myCartDataKeeper'>
          <h1>Total Price: <input ref="bill" type='text' value="0" /></h1>
          <button id='myCartOrderBtn' onClick={this.productDetails}>Order</button>
        </div>
      </div>

      <div id='myCartSecondDiv'>

        <form className="confirmOrderBox">
          <Animated animationIn="zoomIn" animationOut="fadeOut" isVisible={true}>
            <h1 id='confirmOrderh1'>Shipping Adress</h1>
            <input type="text" ref="address" placeholder="Complete Adress" className='confirmOrderTextFeilds' name='adress' />
            <input type="text" ref="city" placeholder="Your City" className='confirmOrderTextFeilds' />
            <input type="number" ref="phone" placeholder="Phone Number" className='confirmOrderTextFeilds' name='number' />
            <input type="submit" value="Confirm Order" id='confirmOrderBtn' onClick={this.sendConformOrder} />
            <input type="submit" value="Back" id='confirmOrderBackBtn' onClick={this.OrderBackInfo} />
          </Animated>
        </form>
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.signupReducer.isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendOrderRemoveData: (data) => { dispatch(removeOrder(data)) },
    sendErrors: (data) => { dispatch(getErrors(data)) },
    sendOrderConformed: (data) => { dispatch(orderConfirmed(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);