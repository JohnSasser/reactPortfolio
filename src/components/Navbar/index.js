import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Navbar = props => {
  return (
    <div id="navbar">
      <div className="links-1">
        <Link id="contact-me-link" to="/contact-me">
          Contact Me
        </Link>
        <Link id="homepage-link" to="/">
          Home
        </Link>
      </div>
      <div></div>
      <div className="links-2">
        <Link id="portfolio-link" to="/portfolio">
          Portfolio
        </Link>
        <Link id="about-me-link" to="/about-me">
          About Me
        </Link>
        <Link id="resume-link" to="/resume">
          Resume´
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
