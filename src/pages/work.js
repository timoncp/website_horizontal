import React from 'react';

import PageTitle from '../shared/page-title';
import SectionHeader from '../shared/section-header';

import LandscappScreenshots from '../assets/landscapp-screenshots.png';

import './page.css';
import './work.css';

function Work() {
  return (
    <div className='page work'>
      <PageTitle color='paleorange'>previous work</PageTitle>
      <div id='be' className='text-column'>
        <SectionHeader color='paleorange'>BearingPoint</SectionHeader>
        Primarily worked on a project called Landscapp, a custom key performance indicator for application portfolios, with a rule-based calculation engine.<br /><br />
        Had the chance to conduct this project from start up until version 2. Was instructed with monitoring development activity and expanding existing infrastructure.<br /><br />
        Technologies used: React.js, Redux, Sass, Mocha, Node.js, Express, MongoDB, Nginx, Docker, Amazon Web Services, Jenkins
      </div>
      <div id='findie_sbu'>
        <div id='findie' className='text-column'>
          <SectionHeader color='paleorange'>Findie</SectionHeader>
          Built a page management admin app to quickly generate and customize the look and content of white-label instances.<br /><br />
          Built a raw tool that extracts interesting scenes in a video file based on sound activity.<br /><br />
          Technologies used: Node.js, React, ffMPEG, Linux Shell, GitLab
        </div>
        <div id='sbu' className='text-column'>
          <SectionHeader color='paleorange'>SBU</SectionHeader>
          Developed the prototypes for two mobile applications, within a larger system implemented for the local police station in Bucharest. Maps, Forms, Open Claims, and localisation were features  of both the citizen and the police office app.<br /><br />
          Technologies used: React Native, Android, iOS,  JavaScript ES6,  Maps, Leaflet, Node.js, PostgreSQL
        </div>
      </div>
      <img src={LandscappScreenshots} id='landscapp-screenshots' alt='Screenshots of the Landscapp project that I worked on' />
    </div>
  );
}

export default Work;
