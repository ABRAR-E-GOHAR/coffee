import React from 'react';
import NavBar from "../NavBar/navbar";
import Carousel from '../Carousel/carousel';
import Bottom from '../BottomBody/bottom';
import Subscribe from '../Subscribe/subscribe';
import HomeFooter from '../HomeFooter/homefooter';
import BeforeFooter from '../BeforeFooter/beforeFooter';
export default class Home extends React.Component {
    render() {
        return <>
            <NavBar />
            <Carousel />
            <Bottom />
            <Subscribe />
            <BeforeFooter />
            <HomeFooter />
        </>
    }
}