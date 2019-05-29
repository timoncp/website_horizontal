import React, { useState } from 'react';

import { NavLink, withRouter } from 'react-router-dom';

import PageTitle from '../shared/page-title';

import './sidebar-sm.css';
import TimoJPG from '../assets/portrait.jpg';
import StripeMenuSVG from '../assets/stripe-menu.svg';

const titles = {
  '/': <h1 className='home-title'>Timon Cârneci-Pröve</h1>,
  '/about': <PageTitle color='seagreen'>about</PageTitle>,
  '/work': <PageTitle color='paleorange'>previous work</PageTitle>,
  '/services': <PageTitle color='cherry'>services</PageTitle>
};

function SidebarSm(props) {
  const [isNavVisible, setNavVisibility] = useState(false);

  return (
    <div className='sidebar-sm'>
      <img id='timo-img' src={TimoJPG} alt='Timon' />
      {titles[props.location.pathname]}
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

export default withRouter(SidebarSm);
