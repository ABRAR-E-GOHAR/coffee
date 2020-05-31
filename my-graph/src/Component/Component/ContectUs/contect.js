import React from 'react';
import './contect.css';
import CopyNav from '../CopiedNavBar/copyNav';
import ContectUs from './Images/fade.jpg'
export default class Contect extends React.Component {
    phoneNumbers = () => {
        document.getElementById('changingColors').style.backgroundColor = '#32CD32';
        document.getElementById('changingColors').style.border = '3px solid #228B22';
        document.getElementById('changingColors1').style.backgroundColor = '#0090b4';
        document.getElementById('changingColors1').style.border = '2px solid #00668f';
        document.getElementById('contectNumberDedtails').style.display = 'block';
        document.getElementById('secondContectTable').style.display = 'none';
    }
    locationDetails = () => {
        // document.getElementsByClassName('contectUsbutton').style.backgroundColor='red';
        document.getElementById('changingColors1').style.backgroundColor = '#32CD32';
        document.getElementById('changingColors1').style.border = '3px solid #228B22';
        document.getElementById('changingColors').style.backgroundColor = '#f4511e';
        document.getElementById('changingColors').style.border = '2px solid #ff440b';
        document.getElementById('contectNumberDedtails').style.display = 'none';
        document.getElementById('secondContectTable').style.display = 'block';
    }
    render() {
        return <>
                <CopyNav/>
            <div class="contectUsContainer">
                <img src={ContectUs} id='imageDealing' />

                <div className="contectUsCentered">
                    <div id='managingContectButton'>
                        <button className="contectUsbutton" id='changingColors' onClick={this.phoneNumbers}><span id='contectUsSpan'>Contect Us</span></button>

                        <button className="contectUsbutton1" id='changingColors1' onClick={this.locationDetails}><span id='contectUsSpan'>Location</span></button>
                    </div>

                    <div id='contectNumberDedtails'>
                        <p id='contectHeading'><span id='contectLatter'>Black</span><span id='contectLatter1'>Steam</span><span id='contectLatter2'>Cafe</span></p>
                        <p className='contectDetailsmiddle'>blacksteamcafe_711<span id='contectColor'>@gmail</span>.com</p>
                        <p className='contectDetailsmiddle'>03153140320</p>
                        <p className='contectDetailsmiddle'>03163544310</p>
                        <p className='contectDetailsmiddle'><span id='production'>MERN Stack Developers</span><br />Production</p>
                    </div>
                    <div id='secondContectTable'>
                        <p id='contectHelding'>BlackSteamCafe</p>
                        <p className='baseContect'>MediaClub MadinaTown kohinoor Plaza1<br /> Block Number # 7993-B</p>
                        <p className='baseContect' id='productionON'>MERN Stack Developers <br />Production</p>
                    </div>
                </div>
            </div>
        </>
    }
}