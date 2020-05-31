import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
export default class NavBar extends React.Component {
 
    myFunction = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    render() {
        return <>
            <div className="topnav" id="myTopnav">
            <Link to='/' className='active'> <img src='./loge.png' id='navImag1'/> <i> <b id='logoText'> <span id='changingColorNav'>B</span>lack<span id='changingColorNav1' >S</span>team<span id='changingColorNav2'>C</span>afee</b></i></Link> 
               <Link to='/news'><span  className='navNews'>News</span> </Link> 
               <Link to='/contectus' ><span  className='navNews'>Contect</span></Link> 
                <Link to="/about"><span   className='navNews'>About</span> </Link>
                <Link to='/adminlogin'><span  className='navNews'>Admin LogIn</span>  </Link>
                <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        
        </>
    }
}