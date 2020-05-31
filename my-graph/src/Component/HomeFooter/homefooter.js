import React from 'react';
import './homefooter.css';
import copyWrite from './Images/copywrite.png';
import facebook from './Images/face.png';
import gmail from './Images/gmail.png';
import insta from './Images/insta.png';
import twitter from './Images/twitter.png';
export default class HomeFooter extends React.Component {
  render() {
    return <>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6 className='hedingsOfHomeFooter'>About</h6>
              <p className="text-justify">Faisalabad is the oldest city of the Pakistani surrounded by cultural values. They are not only famous for making jokes but also have the ability to secure the traditional values. Faisalabad street foods are famous everywhere but they also served with Pakistani, Indian, Chinese foods as well. Today, I am sharing a list of Top 5 Best Café Faisalabad which will assist you for a perfect dine out. Whenever you visit Faisalabad, please consider these restaurants in your top priority and enjoy the best food ever.</p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6 className='hedingsOfHomeFooter'>Made Using</h6>
              <ul className="footer-links">
                <li className='linksAddingTextShadow' ><a href="/#">React JS</a></li>
                <li className='linksAddingTextShadow' ><a href="/#">MongoDB</a></li>
                <li className='linksAddingTextShadow' ><a href="/#">Express JS</a></li>
                <li className='linksAddingTextShadow' ><a href="/#">Node JS</a></li>
                <li className='linksAddingTextShadow' ><a href="/#">JavaScript</a></li>
                <li className='linksAddingTextShadow' ><a href="/#">ES 6</a></li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6 className='hedingsOfHomeFooter'>Quick Links</h6>
              <ul className="footer-links">
                <li><a href="/#" className='linksAddingTextShadow'>About Us</a></li>
                <li><a href="/#" className='linksAddingTextShadow'>Contact Us</a></li>
                <li><a href="/#" className='linksAddingTextShadow'>Contribute</a></li>
                <li><a href="/#" className='linksAddingTextShadow'>Privacy Policy</a></li>
                <li><a href="/#" className='linksAddingTextShadow'>Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">Copyright &nbsp;<img alt="" src={copyWrite} id='copyWriteImg' /> &nbsp;2020 All Rights Reserved by
         <a href="/#">Scanfcode</a>.
            </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="facebook" href="/#"><img alt="" src={facebook} className="fa fa-facebook" id='facebookimag' /></a></li>
                <li><a className="twitter" href="/#"><img alt="" src={insta} className="fa fa-twitter" id='twitterimag' /></a></li>
                <li><a className="dribbble" href="/#"><img alt="" src={twitter} className="fa fa-dribbble" id='linkinimag' /></a></li>
                <li><a className="linkedin" href="/#"><img alt="" src={gmail} className="fa fa-linkedin" id='gmailimag' /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  }
}