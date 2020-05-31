import React from 'react';
import './carousel.css'
export default class Carousel extends React.Component{
    render(){
        return<>
        
   <div id='outerSlider'>
<img src="https://assets.bonappetit.com/photos/57aceacc1b3340441497532d/16:9/w_2560%2Cc_limit/double-rl-ranch-burger.jpg"  className='SlideImage'/>
<img src="https://cheetay-prod-media.s3.amazonaws.com/production/media/images/partners/2019/11/Cafe-Barbera.jpg"  className='SlideImage'/>
<img src="https://www.tomswallpapers.com/large/201502/3583.jpg"  className='SlideImage'/>

</div>
        </>
    }
}