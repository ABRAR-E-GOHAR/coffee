import React from 'react';
import './about.css';
import Image from './Images/aboutPage5.jpg';
import CopyNav from '../CopiedNavBar/copyNav';
import AboutBody from '../AboutBody/aboutBody';
import HomeFooter from '../HomeFooter/homefooter';
import Animate from 'animate.css-react';

export default class About extends React.Component {
    render() {
        return<>
        <CopyNav/>
         <div id='aboutContainer'>
            <img src={Image} id='backGroungImage' />
        
            <div class="about-center"><hr className='horizontalLine'/>STORY OF GLORY<br/><hr  className='horizontalLine'/></div>
            <div class="about-bottom-left">
                <q>  BlackSteamCafe </q></div>
        </div>
        <AboutBody/>
        <HomeFooter/>
        </>
    }
}