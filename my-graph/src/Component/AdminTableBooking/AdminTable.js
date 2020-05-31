import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./AdminTable.css";
import { allBookingData } from "../Store/Action/action";

class AdminTable extends React.Component {

    componentDidMount() {
        fetch("/booking", {
            method: "GET",
            headers: {
                "x-auth-token": localStorage.getItem("adminToken")
            }
        })
            .then(res => res.json())
            .then(data => {
                this.props.sendBookingData(data);
            });
    }

    render() {
        if (this.props.adminAuthenticated === false) {
            return <Redirect to="/adminLogin" />
        }
        return <>
            <div id="adminbookingDiv">
                <h1 id='adminTableText'>Booked Table</h1>
                {
                    this.props.bookingData ? this.props.bookingData.map((item) => {
                        return <>
                            <table id="adminbookingTable">
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Time/Date</th>
                                    <th>For Next Hours</th>
                                </tr>
                                <tr>
                                    <td>{item.username}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.timeDate}</td>
                                    <td>{item.hours}</td>
                                </tr>
                            </table>
                        </>
                    }) : null
                }
            </div>
        </>
    }
}

function mapStateToProps(state) {
    return {
        bookingData: state.bookingReducer.bookingData,
        adminAuthenticated: state.adminReducer.adminAuthenticated,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendBookingData: (data) => { dispatch(allBookingData(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminTable);