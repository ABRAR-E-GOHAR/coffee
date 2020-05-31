import React from 'react';
import "./logo.css";

export default class Logo extends React.Component {

  onScrollFunction = () => {
    // document.getElementById("logo-navbar").style.position = "fixed";
    // document.getElementById("logo-navbar").style.top = "0px";
    alert();
  }
  render() {
    return <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id="logo-navbar" onscroll={this.onScrollFunction}>
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li claclassName="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  }
}