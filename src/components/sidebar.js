import React from 'react';
import { Link } from 'react-router-dom';

import SocialIcon from '../shared/social-icon';

import './sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-mid'>
        <h3 className='sidebar-title'>
        <Link to='/home'>
          Timon<br />
          Carneci-Pröve
        </Link>
        </h3>
        <h4 className='sidebar-subtitle'>
          fullstack<br />
          developer<br />
          &#8212;<br />
          complete<br />
          web solutions<br />
        </h4>
        <SocialIcon type='linkedin' />
        <SocialIcon type='github' />
        <SocialIcon type='cv' />
      </div>
      <div className='sidebar-bottom'>
        <p><Link to='/attributions'>Attributions</Link> &nbsp;&nbsp; | &nbsp;&nbsp; <a href='mailto:timon.carneciprove@icloud.com'>Contact</a></p>
        <span>
          <b>
            <Link to='/home'>timoncp.com</Link>
          </b>
        </span>&nbsp;&nbsp;<span>© 2019</span>
      </div>
    </div>
  );
}

export default Sidebar;
