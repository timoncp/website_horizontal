import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import PageTitle from '../shared/page-title';
import TimoJPG from '../assets/portrait.jpg';
import StripeMenuSVG from '../assets/stripe-menu.svg';
import StripeMenuWhiteSVG from '../assets/stripe-menu-white.svg';

import './navbar-sm.css';

const titles = {
  '/': <h1 className='home-title'>Timon Cârneci-Pröve</h1>,
  '/about': <PageTitle color='seagreen'>about</PageTitle>,
  '/work': <PageTitle color='paleorange'>previous work</PageTitle>,
  '/services': <PageTitle color='cherry'>services</PageTitle>
};

function NavbarSm(props) {
  const [isNavVisible, setNavVisibility] = useState(false);

  const navCls = classNames('navbar-sm', {
    open: isNavVisible
  });

  const menuBtnCls = classNames('menu-btn', {
    open: isNavVisible
  });

  const MenuButton = isNavVisible ? StripeMenuWhiteSVG : StripeMenuSVG;

  return (
    <div className={navCls}>
      <img id='timo-img' src={TimoJPG} alt='Timon' />
      {titles[props.location.pathname]}
      <img className={menuBtnCls}
        src={MenuButton}
        alt='Menu Button'
        onClick={() => setNavVisibility(!isNavVisible)}
      />
      { isNavVisible && (
        <div className='navbar-sm-nav' onClick={() => setNavVisibility(false)}>
          <Link exact to='/' className='nav-sm-link babyblue'>home</Link>
          <Link to='/about' className='nav-sm-link seagreen'>about</Link>
          <Link to='/work' className='nav-sm-link paleorange'>work</Link>
          <Link to='/services' className='nav-sm-link cherry'>services</Link>
          <div className='navbar-sm-bottom'>
            <p><Link to='/attributions'>Attributions</Link> &nbsp;&nbsp; | &nbsp;&nbsp; <a href='mailto:timon.carneciprove@icloud.com'>Contact</a></p>
            <span><b>timoncp.com</b></span>&nbsp;&nbsp;<span>© 2019</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(NavbarSm);
