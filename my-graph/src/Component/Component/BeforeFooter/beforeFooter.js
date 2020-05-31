import React from 'react';
import './beforeFooter.css';
import image from './Images/homeCup0.jpg';

export default class BeforeFooter extends React.Component {
    render() {
        return <div id='beforeFooterBackground'>
            <p id='beforeFooterText'><q><em>A Journy Towards Taste And Love</em></q></p>

            <div className='beforeFooterContainer'>
                <div className="beforeFooterImages">
                    <img alt="" src={image} id='beforeFooterImage' />

                </div>
            </div>

        </div>
    }
}