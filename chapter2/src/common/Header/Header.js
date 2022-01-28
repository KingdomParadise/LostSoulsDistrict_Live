import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import logo from '../../assets/img/logo.png'

const Header = () => (
  <div className="Header" data-testid="Header">
    <div className='container-fluid'>
      <div className='menu_bar'>
        <div className='d-flex justify-content-between'>
          <div className='logo'>
            <img src={logo} />
          </div>
          <div className='menus align-self-center'>
            <ul className='d-flex text-white ftf'>
              <li><a>Home</a></li>
              <li><a>Buy Packs</a></li>
              <li><a> 		Market 	</a></li>
              <li><a>	Collection 	</a></li>
              <li><a>	Token		 </a></li>
              <li><a>Sign-in</a></li>
            </ul>
          </div>
          <div className='align-self-center'>
            <button className='ftf tp ply_btn'>Play Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
