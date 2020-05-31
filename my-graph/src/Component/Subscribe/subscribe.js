import React from 'react';
import './subscribe.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
export default class Subscribe extends React.Component {

  ValidateEmail = () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('emailText').value)) {
      alert('Congrats!!!!You Have Subscribed To Our Mailing List');
      document.getElementById('emailText').value = '';
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
  }


  render() {
    return <>

      <div className="subscribeContainer">

        <img alt="" src="https://media.self.com/photos/57d87ff046d0cb351c8c4928/master/pass/Food-During-Sex_Feat.jpg" id='subscribeBackground' />


        <div className="topleft">

          <div id='adjustAlighn'>
            <ScrollAnimation animateIn="fadeInDown">
              <h1 className='subText'> Subscribe To Our Mailing List!! </h1>

              <input type='text' id='emailText' />

              <button onClick={this.ValidateEmail} className="subBtn subDanger" id='usingBreak'>Subscribe!</button>
            </ScrollAnimation>
            <br />
            <br />
            <br />
            <ScrollAnimation animateIn="fadeInDown">
              <h2 className='subText'>Create your free Account Now!</h2>

              <Link to="/signup"> <button className="subBtn subSuccess"> SignUp </button></Link>
              <Link to="/login"><button className="subBtn subAccess">LogIn</button> </Link>
            </ScrollAnimation>
          </div>

        </div>

      </div>

    </>
  }
}