import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import StripeMenu from '../assets/stripe-menu-white.svg';

import './nav-menu.css';

function NavMenu() {
  const [isVisibile, setVisibility] = useState(false);

  const menuCls = classNames('nav-menu', {
    open: isVisibile,
  });

  const iconCls = classNames('nav-menu-icon', {
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

export default NavMenu;
