import React from 'react';
import './bottom.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Bottom extends React.Component {
  menFunction = () => {
    document.getElementById('one1').style.display = '';
    document.getElementById('one2').style.display = '';
    document.getElementById('one3').style.display = '';
    document.getElementById('one4').style.display = 'none';
    document.getElementById('one5').style.display = 'none';
    document.getElementById('one6').style.display = 'none';
    document.getElementById('one7').style.display = '';
    document.getElementById('one8').style.display = '';
    document.getElementById('one9').style.display = '';
  }
  womenFunction = () => {
    document.getElementById('one7').style.display = '';
    document.getElementById('one8').style.display = '';
    document.getElementById('one9').style.display = '';

    document.getElementById('one1').style.display = 'none';
    document.getElementById('one2').style.display = 'none';
    document.getElementById('one3').style.display = 'none';
    document.getElementById('one4').style.display = '';
    document.getElementById('one5').style.display = '';
    document.getElementById('one6').style.display = '';
  }
  allFunction = () => {
    document.getElementById('one1').style.display = '';
    document.getElementById('one2').style.display = '';
    document.getElementById('one3').style.display = '';
    document.getElementById('one4').style.display = '';
    document.getElementById('one5').style.display = '';
    document.getElementById('one6').style.display = '';
    document.getElementById('one7').style.display = '';
    document.getElementById('one8').style.display = '';
    document.getElementById('one9').style.display = '';
  }
  render() {
    return <>

      <div id='outerLayer'>
        <ScrollAnimation animateIn="fadeInDown">
          <h3 id='headingText'> <q> <b id='h'>H</b>ere <b id='i'>I</b>s <b id='o'>O</b>ur <b id='c'>C</b>olle<b id='c'>c</b>tion </q></h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown">
          <div id='collectionBtn'>
            <button className="buttonContainer buttonGreen" onClick={this.allFunction}>Show All</button>
            <button className="buttonContainer buttonBlue" onClick={this.menFunction}>Cofe & Tea</button>
            <button className="buttonContainer buttonRed" onClick={this.womenFunction}>Food</button>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceInUp">
          <div className="cards" >

            <div className="card" id='one1' name='tisot'> <img src='https://cdn.miscellaneoushi.com/1280x1024/20121022/tea%20coffee%20widescreen%201280x1024%20wallpaper_www.miscellaneoushi.com_78.jpg' className='widthSeting' /> </div>
            <div className="card" id='one2' name='swis'><img src='https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9434.jpg' className='widthSeting' /></div>
            <div className="card" id='one3' name='Rolex'><img src='https://www.parkgrandheathrow.co.uk/blog/wp-content/uploads/2016/02/135404954.jpg' className='widthSeting' /></div>
            <div className="card" id='one4' name='sports'><img src='https://weneedfun.com/wp-content/uploads/2015/10/Beautiful-Food-Photos-9.jpg' className='widthSeting' /></div>
            <div className="card" id='one5' name='tisot'><img src='https://soarcollective.com/wp-content/uploads/2018/12/bowl-cherries-chicken-936611-960x669.jpg' className='widthSeting' /></div>
            <div className="card" id='one6' name='Luxery'><img src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/sites/4361/images/h709eOdbQqmTso5dXt7U_HEALTHY_BREAKFAST_FOR_PROFESSIONAL_CHEERLEADERS.jpg' className='widthSeting' /></div>
            <div className="card" id='one7' name='export'><img src='https://1.bp.blogspot.com/-jkgx3_KWt_0/V3mic6qYiUI/AAAAAAAACGk/WXWuoW1pucUzjpOp7iVSB59pJ8P8hSJfgCLcB/s1600/portobagtis.jpg' className='widthSeting' /></div>
            <div className="card" id='one8' name='Tesla'><img src='https://www.tripsavvy.com/thmb/adPjJgTKxo3WLelkuDDd_NeJ6nU=/1920x1280/filters:no_upscale():max_bytes(150000):strip_icc()/PizzaWithThinCrust-5c40f440c9e77c0001ce1bcf.jpg' className='widthSeting' /></div>
            <div className="card" id='one9' name='Rolex'><img src='https://breadcakesandale.files.wordpress.com/2015/04/plate-of-ginger-and-cocoa-nib-biscuits.jpg' className='widthSeting' /></div>

          </div>
        </ScrollAnimation>
      </div>
    </>
  }
}