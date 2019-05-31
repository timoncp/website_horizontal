import React, { useState } from 'react';

import { Link, withRouter } from 'react-router-dom';

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
          <Link exact to='/' className='nav-sm-link babyblue'>home</Link>
          <Link to='/about' className='nav-sm-link seagreen'>about</Link>
          <Link to='/work' className='nav-sm-link paleorange'>work</Link>
          <Link to='/services' className='nav-sm-link cherry'>services</Link>
        </div>
      )}
    </div>
  );
}

export default withRouter(SidebarSm);
