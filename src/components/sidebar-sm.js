import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import './sidebar-sm.css';
import TimoJPG from '../assets/portrait.jpg';
import StripeMenuSVG from '../assets/stripe-menu.svg';

function SidebarSm() {
  const [isNavVisible, setNavVisibility] = useState(false);

  return (
    <div className='sidebar-sm'>
      <img id='timo-img' src={TimoJPG} alt='Timon' />
      <h1>Timon Cârneci-Pröve</h1>
      <img id='menu-btn'
        src={StripeMenuSVG}
        alt='Menu Button'
        onClick={() => setNavVisibility(!isNavVisible)}
      />
      { isNavVisible && (
        <div className='sidebar-sm-nav' onClick={() => setNavVisibility(false)}>
          <NavLink exact activeClassName='active' to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/work'>Previous Work</NavLink>
          <NavLink to='/services'>Services</NavLink>
        </div>
      )}
    </div>
  );
}

export default SidebarSm;
