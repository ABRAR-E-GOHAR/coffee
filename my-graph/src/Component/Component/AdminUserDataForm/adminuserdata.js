import React from 'react';
import './adminuserdata.css';
import { orderUserToAdmin } from "../Store/Action/action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class AdminUserData extends React.Component {

  componentDidMount() {
    fetch("/conformOrder", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.props.sendOrderToAdmin(data);
      })
  }

  render() {
    if (this.props.adminAuthenticated === false) {
      return <Redirect to="/adminlogin" />
    }
    return <>
      {
        this.props.upComingOrders ? this.props.upComingOrders.map((item) => {
          return <>
            <div id='givingUserOrdersBackground'>
              <div>
                <h3 className='addingUseOrdersData'>Customer Name:{item.username}</h3>
                <p className='addingUseOrdersData'>Adress:{item.address}</p>
                <p className='addingUseOrdersData'>City:{item.city}</p>
                <h3 className='addingUseOrdersData'>Mobile Number:{item.phone}</h3>
                <p className='addingUseOrdersData'>Total Price:{item.bill}</p>
                <p className='addingUseOrdersData'>date_Time:{item.date}</p>
              </div>

              <div>
                <table className='adminUserDataTable'>
                  <tr>
                    <th className='adinUserTableHeadings'>Product</th>
                    <th className='adinUserTableHeadings'>Quantity</th>
                    <th className='adinUserTableHeadings'>Delete</th>
                  </tr>
                  {
                    item.orders ? item.orders.map((item) => {
                      return <>
                        <tr>
                          <td className='adminUserTableData'><img alt="" src={item.profile} className='adminUserOrdersData' /></td>
                          <td className='adminUserTableData'><input type='number' className='adminUserOrdersData' value={item.quantity} /></td>
                          <td className='adminUserTableData'><button className='adminUserOrdersData'>Del</button></td>
                        </tr>
                      </>
                    }) : null
                  }
                </table>
              </div>
            </div>
          </>
        }) : null
      }
    </>
  }
}

function mapStateToProps(state) {
  return {
    upComingOrders: state.upComingOrdersReducer.upComingOrders,
    adminAuthenticated: state.adminReducer.adminAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendOrderToAdmin: (data) => { dispatch(orderUserToAdmin(data)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserData);