import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import StripeMenu from '../assets/stripe-menu-white.svg';

import './navbar.css';

function Navbar() {
  const [isVisibile, setVisibility] = useState(false);

  const menuCls = classNames('navbar', {
    open: isVisibile,
  });

  const iconCls = classNames('navbar-icon', {
    open: isVisibile,
  });

  const itemsCls = classNames('nav-items', {
    open: isVisibile,
  });

  return (
    <div className={menuCls} onClick={() => setVisibility(!isVisibile)}>
      <img className={iconCls} src={StripeMenu} alt='Menu Button' />
      <div className={itemsCls}>
        <Link exact to='/' className='nav-link babyblue'>home</Link>
        <Link to='/about' className='nav-link seagreen'>about</Link>
        <Link to='/work' className='nav-link paleorange'>work</Link>
        <Link to='/services' className='nav-link cherry'>services</Link>
      </div>
    </div>
  );
}

export default Navbar;
