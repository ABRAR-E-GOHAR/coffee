import React from "react";
import { connect } from "react-redux";
import "./Alert.css";

class Alert extends React.Component {

    render() {

        return <>
            {
                this.props.message ? <div id="alertComponentDiv" className="animated slideInDown"><h4>{this.props.message}</h4></div> : null
            }
        </>
    }
}
function mapStateToProps(state) {
    return {
        message: state.alertReducer.errors
    }
}

export default connect(mapStateToProps)(Alert);