import React from 'react';
import footerSvg from '../../Wave-footer.svg';

import './style.css';

const Footer = () => {
  return (
    <div className="footer-parent-div">
      <p className="name-date">
        <sapn>
          John Sasser <span>&#169;</span> 2020{' '}
        </sapn>
      </p>

      <p className="loading-io-attribution">
        <a
          href="https://loading.io/background/m-wave/"
          target="blank"
          norefferer
        >
          {' '}
          m-wave{' '}
        </a>
      </p>
      {/* <img
        src={footerSvg}
        alt="ARC-logo"
        style={{ height: '4em', width: '100vw' }}
      /> */}
    </div>
  );
};

export default Footer;
