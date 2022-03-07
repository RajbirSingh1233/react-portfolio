import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import RajbirLogo from './images/RajbirLogo.png';
import Name from './Name';
import About from './About';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from 'react-scroll';

const Header = () =>{

    return(
        <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <img src={RajbirLogo} alt="logo" id="main_logo"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    <div className="collapse navbar-collapse nav_cursor" id="navbarSupportedContent">
     
      <ul className="navbar-nav ml-5 mb-2 mb-lg-0">

        <li className="nav-item">
          <Link spy={true} smooth={true} exact className="nav-link" aria-current="page" activeClassName="active" to="home">Home</Link>
        </li>

        <li className="nav-item">
        <Link spy={true} smooth={true} exact className="nav-link" aria-current="page" activeClassName="active" to="about">About Me</Link>
        </li>

        <li className="nav-item">
          <Link spy={true} smooth={true} exact className="nav-link" aria-current="page" activeClassName="active" to="skills">Skills</Link>
        </li>

        <li className="nav-item">
          <Link spy={true} smooth={true} exact className="nav-link" aria-current="page" activeClassName="active" to="education" >Education</Link>
        </li>

        <li className="nav-item">
          <Link spy={true} smooth={true} exact className="nav-link" aria-current="page" activeClassName="active" to="projects">Projects</Link>
        </li>
        </ul>
        <div className="button1">
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-items navbar-dark bg-dark">
            <Link className="nav_button" id="contact_button" spy={true} smooth={true} exact  to="contact">Contact</Link>
            
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
</div></div>
</div>


      <div className="main_header home">
        <div className="header">
        <Name />
        </div>
        </div>

        <section className="about" id="about_scroll">
          <About id="about"/>
        </section>

</>
    );
}
export default Header;