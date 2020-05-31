import React from 'react';
import './copyNav.css';
import { Link } from 'react-router-dom';
export default class CopyNav extends React.Component {
 
    myFunction = () => {
        let x = document.getElementById("myTopnav1");
        if (x.className === "topnav1") {
            x.className += " responsive";
        } else {
            x.className = "topnav1";
        }
    }

    render() {
        return <>
            <div className="topnav1" id="myTopnav1">
            <Link to='/' className='active'> <img src='./loge.png' id='navImag2'/> <i> <b id='logoText1'> <span id='changingColorNav'>B</span>lack<span id='changingColorNav1' >S</span>team<span id='changingColorNav2'>C</span>afee</b></i></Link> 
               <Link to='/news'><span  className='navNews1'>News</span> </Link> 
               <Link to='/contectus' ><span  className='navNews1'>Contect</span></Link> 
                <Link to="/about"><span   className='navNews1'>About</span> </Link>
                <Link to='/adminlogin'><span  className='navNews1'>Admin LogIn</span>  </Link>
                <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        
        </>
    }
}