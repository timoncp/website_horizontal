import React from 'react';

import SocialIcon from '../shared/social-icon';

import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-mid'>
        <h3 className='sidebar-title'>
        Timon<br />
        Cârneci-Pröve
        </h3>
        <h4 className='sidebar-subtitle'>
          fullstack<br />
          developer<br />
          &#8212;<br />
          custom<br />
          web solutions<br />
        </h4>
        <SocialIcon type='linkedin' />
        <SocialIcon type='github' />
      </div>
      <div className='sidebar-bottom'>
        <p>Attributions &nbsp;&nbsp; | &nbsp;&nbsp; <a href='mailto:timon.carneciprove@icloud.com'>Contact</a></p>
        <span><b>timoncp.com</b></span>&nbsp;&nbsp;<span>© 2019</span>
      </div>
    </div>
  );
}

export default Sidebar;
