import React from 'react';
import './aboutBody.css';
import Image from './Images/foody12.jpg';
import Image1 from './Images/aboutCup2.jpeg';
import Image2 from './Images/aboutBurger.jpg';


export default class AboutBody extends React.Component {
    render() {
        return <div id='settingAboutBodyBack'>
            <h1>.</h1>
            <div id='makingAboutTextOnPlace'>
                <p id='aboutCaption'><em> And the idea of just wandering off to a cafe with
a notebook and writing and seeing where that takes me for awhile is just bliss.</em></p>
                <q id='aboutPoetName'>J.K.Rowling</q>
            </div>
            <div id='aboutTextProtection' >
                <p id='justAboutText'><i>
                    During one of his uncannily well-timed impromptu visits to my restaurant, Union Square Cafe, Pat Cetta taught me how to manage people. Pat was the owner of a storied New York City steakhouse called Sparks, and by that time, he was an old pro at running a fine restaurant.
                    My history has been to grow the roots as deeply as you can before going on to the next thing. That's why it took 10 years to go from Union Square Cafe to Gramercy Tavern, and another 10 years to go from Blue Smoke's first location to its second, and five to go from Shake Shack 1 to Shake Shack 2.
                    As a form of escapism, yearning for the 20th century is understandable, but in practice it would be horrible - sort of like going on a holiday promising yourself you could go without the Internet, only to crumble and walk in a daze to the local Internet cafe to gorge on connectivity.
                    Everyone would have bigger and safer cars if they didn't have those CAFE standards: corporate average fuel economy.
</i>
                </p>
                <div>

                    <p id='aboutBodyNextText'><i>
                        All The Party Booking has been Stated To Facilitate Our Customers

</i></p>
                </div>
            </div>
            <img src={Image} className='aboutBodyImages' />

            <img src={Image1} className='aboutBodyImages' />

            <img src={Image2} className='aboutBodyImages' />





        </div>
    }
}