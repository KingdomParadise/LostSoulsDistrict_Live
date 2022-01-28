import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';
import logo from '../../assets/img/logo.png'

const Footer = () => (
  <div className="Footer" data-testid="Footer">
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <img src={logo} className='w-75' />
        </div>
        <div className='col-md-4'>
          <h5 className='ftf'>Pages</h5>
          <div className='row'>
            <div className='col-4'>
              <ul>
                <li><a>Home</a></li>
                <li><a>Create</a></li>
                <li><a>Market</a></li>
              </ul>
            </div>
            <div className='col-4'>
            <ul>
                <li><a>Play</a></li>
                <li><a>FAQ</a></li>
                <li><a>Career</a></li>
              </ul>
            </div>
            <div className='col-4'>
            <ul>
                <li><a>News</a></li>
                <li><a>Terms of Use</a></li>
                <li><a>Licence</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
        <h5 className='ftf'>Social</h5>
        </div>
      </div>
      <p className='text-center'>Copyright © 2022.All Rights Reserved By Lost Soul District</p>
    </div>
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
