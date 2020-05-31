import React from 'react';
import './news.css';
import CopyNav from '../CopiedNavBar/copyNav';
import Image from './Images/newsPage1.jpg';
import Image1 from './Images/newsPage2.jpg';
import Footer from '../HomeFooter/homefooter';
export default class News extends React.Component {
    render() {
        return <>

            <CopyNav />
            <div class="parallax"></div>

            <div id='theNewsTwxt'>
                <strong id='NewsHeading'>BlackSteamCafe</strong><br />
                <p id='internalNewsText'>
                    is  It was a beautiful custom. When a person who had a break of good luck entered a cafe and ordered a cup of coffee, he didn't pay just for one, but for two cups, allowing someone less fortunate who entered later to have a cup of coffee for free.
                    I think it's important to have flexibility to work wherever is best for you. I actually encourage people to work at the cafe - or from home or wherever works best for them.
                    I bought a Hofner guitar and amplifier for 32 guineas, then spent ages trying to make a bottleneck. At that point, I was meant to be developing my father's ice-cream cafe into a global concern, but I spent all my time in the stockroom playing slide guitar.
                    I wanted to help my sister, Latoya, because she's an awesome cook. She's one of the best culinary people I've ever met. She makes awesome cakes, so I was thinking about starting a little coffee shop cafe where she could sell them. I want to open a little, small, mom-and-pop place, but she can also do catering, too.
                    Once I was in a cafe in Portland and the woman at the next table and I began chatting and in the course of our conversation she strongly recommend I visit this web site called 'The Rumpus' so I could read this advice column called 'Dear Sugar.' It was so painful not to tell her that in fact I was Sugar, but I didn't.
                    What I try very hard to do is have an hour or so in the morning when I leave the house and don't have my phone with me. I'll go sit in a cafe and read and handwrite in my notebook and not be facing a screen. My head will be clear. I will be able to hear myself think. Because honestly for the rest of the day it's just screens, screens, screens.
</p>
                <img src={Image} className='newsImage1' /><img src={Image1} className='newsImage1' />

            </div>
            <Footer />
        </>
    }
}