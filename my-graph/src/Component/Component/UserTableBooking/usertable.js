import React from 'react';
import './usertable.css';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { sendBookingDataToAdmin } from "../Store/Action/action";
import { getErrors } from "../Store/Action/alertAction";
import { allBookingData } from "../Store/Action/action";

class UserTable extends React.Component {

    state = {
        phone: "",
        person: "",
        timeDate: "",
        hours: ""
    }

    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    BookTableConfirm = (event) => {
        event.preventDefault();
        const { phone, person, timeDate, hours } = this.state;
        if (phone === "" || person === "" || timeDate === "" || hours === "") {
            this.props.sendErrors("Fill All Fields");
        }
        else {
            this.props.sendData(this.state);
            this.fetchData();
        }
    }
    // =====================get data==================
    fetchData = () => {
        fetch("/booking", {
            method: "GET",
            headers: {
                "x-auth-token": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                this.props.sendBookingData(data);
            });
    }
    componentDidMount() {
        this.fetchData();
    }

    render() {
        if (this.props.isAuthenticated === false) {
            return <Redirect to="/login" />
        }
        return <>
            < div id='userTableImage'>
                <h1 id='userTableText'>BlackSteamCafe!!</h1>
                <p id='userTableBookinText'><q>BOOK YOU TABLE FOR Parties Only</q></p>
                <div id='userInsideData'>

                    <input className='userTableTags' type='number' placeholder='Phone Number' name="phone" value={this.state.phone} onChange={this.updateState} />
                    <input className='userTableTags' type='number' placeholder='Number of persons' name="person" value={this.state.person} onChange={this.updateState} /><br />
                    <input className='userTableTags' type='datetime-local' name="timeDate" value={this.state.timeDate} onChange={this.updateState} />
                    <input className='userTableTags' type="number" placeholder="For How Many Hours" name="hours" value={this.state.hours} onChange={this.updateState} /><br />

                    <button id='userTableInputBtn' onClick={this.BookTableConfirm}>Book Now</button>
                </div>
                <hr id="line" />
                <div id="bookingDiv">
                    <h1>Already Booked</h1>
                    <table id="bookingTable">
                        <tr>
                            <th>Time/Date</th>
                            <th>For Next Hours</th>
                        </tr>
                        {
                            this.props.bookingData ? this.props.bookingData.map((item) => {
                                return <>
                                    <tr>
                                        <td>{item.timeDate}</td>
                                        <td>{item.hours}</td>
                                    </tr>
                                </>
                            }) : null
                        }
                    </table>
                </div>
            </ div>
        </>
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.signupReducer.isAuthenticated,
        bookingData: state.bookingReducer.bookingData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendData: (data) => { dispatch(sendBookingDataToAdmin(data)) },
        sendErrors: (data) => { dispatch(getErrors(data)) },
        sendBookingData: (data) => { dispatch(allBookingData(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);