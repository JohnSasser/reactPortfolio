import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './style.css';

const Navbar = props => {
  return (
    <div id="navbar">
      <Router>
        <div className="links-1">
          <Link id="contact-me-link" to="/contact-me">
            Contact Me
          </Link>
          <Link id="resume-link" to="/resume">
            Resume´
          </Link>
        </div>
        <div className="links-2">
          <Link id="homepage-link" to="/">
            Home
          </Link>
          <Link id="about-me-link" to="/about-me">
            About Me
          </Link>
          <Link id="portfolio-link" to="/portfolio">
            Portfolio
          </Link>
        </div>

        <switch>
          <Route path="/about-me">{/* <AboutMe /> */}</Route>
          <Route path="/portfolio">{/* <Portfolio /> */}</Route>
          <Route path="/contact">{/* <Contact /> */}</Route>
        </switch>
      </Router>
    </div>
  );
};

export default Navbar;
