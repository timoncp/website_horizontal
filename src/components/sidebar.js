import React from 'react';

import SocialBtn from '../shared/social-btn';

import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <SocialBtn type='linkedin' />
        <SocialBtn type='github' />
      </div>
      <div className='sidebar-bottom'>
        <h1 className='page-title'>timoncp.io</h1>
        <h3 className='page-subtitle'>fullstack developer &#8212; custom web solutions</h3>
      </div>
    </div>
  );
}

export default Sidebar;
