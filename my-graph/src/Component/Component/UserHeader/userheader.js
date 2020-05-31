import React from 'react';
import './userHeader.css';
export default class UserNavBar extends React.Component {
    render() {
        return <div className="animated zoomIn" >
            <img alt="" src='https://c.pxhere.com/photos/0e/9e/technology_digital_tablet_digital_tablet_computer_device_black_white-1325876.jpg!d' id='userNavBackImage' />
            <div className="userNavCentered" id='userCentralText'><b id='frontText'>A Taste Of Love And World Of Imagination  </b><br /> <em id='BackTexture'>Coffee is a beverage that puts one to sleep when not drank</em><br />
                <b id='logotext'><q>BlackSteamCafe</q></b></div>
        </div>
    }
} 