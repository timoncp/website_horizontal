import React from 'react';

import Box from '../shared/box';
import PageSubtitle from '../shared/page-subtitle';

import DatabaseSVG from '../assets/database.svg';
import MobileSVG from '../assets/mobile.svg';
import ServerSVG from '../assets/server.svg';
import ComputerSVG from '../assets/computer.svg';
import ServicesArrow from '../assets/services-arrow.svg';
import ServicesArrowStraight from '../assets/services-arrow-straight.svg';
import CheckmarkOutline from '../assets/checkmark-outline.svg';

import './page.css';
import './services.css';

function Services(props) {
  let ArrowSVG = props.viewportWidth >= 1280 ? ServicesArrow : ServicesArrowStraight;

  return (
    <div className='page services'>
      <div className='service-boxes'>
        <Box title='Web & UI' imagePosition='floating' imageSrc={ComputerSVG}>
          Front-end frameworks<br />
          Mockups and rapid prototyping<br />
          Data visualisation<br />
          Client-side optimisation<br />
          Responsive design
        </Box>
        <Box title='Mobile' imagePosition='floating' imageSrc={MobileSVG}>
          Hybrid mobile app development<br />
          Deployment on iOS and Android<br />
          Map and location services<br />
          Custom in-app camera creation
        </Box>
        <Box title='Backend' imagePosition='floating' imageSrc={DatabaseSVG}>
          Backend server and business logic<br />
          API setup and structuring<br />
          SQL, NoSQL and Graph databases<br />
          Live applications via WebSockets<br />
          Secure data storage and encryption<br />
          SSL<br />
          Parallel processing<br />
          Efficient number crunching
        </Box>
        <Box title='DevOps' imagePosition='floating' imageSrc={ServerSVG}>
          Software-as-a-Service deployment<br />
          Continuous Integration<br />
          VMs and Docker Containers<br />
          Cloud services using AWS<br />
          Load-balancing<br />
          Error tracking and automatic reporting<br />
          Automated testing
        </Box>
      </div>
      <img id='services-arrow' src={ArrowSVG} alt='Arrow pointing towards complete solutions' />
      <div className='large-section' id='complete-solutions'>
        <PageSubtitle>complete solutions</PageSubtitle>
        <div className='list-entry'>
          <img className='checkmark' src={CheckmarkOutline} alt='Checkmark' />
          <div className='text-column'>
          Consultancy at every step of the process
          </div>
        </div>
        <div className='list-entry'>
          <img className='checkmark' src={CheckmarkOutline} alt='Checkmark' />
          <div className='text-column'>
          Design mockups and app prototyping before beginning the building process
          </div>
        </div>
        <div className='list-entry'>
          <img className='checkmark' src={CheckmarkOutline} alt='Checkmark' />
          <div className='text-column'>
          Delivery and extended review at previously agreed upon development milestones
          </div>
        </div>
        <div className='list-entry'>
          <img className='checkmark' src={CheckmarkOutline} alt='Checkmark' />
          <div className='text-column'>
          Very competitive prices, compared to similar full products from corporations or teams of multiple developers
          </div>
        </div>
        <div className='list-entry'>
          <img className='checkmark' src={CheckmarkOutline} alt='Checkmark' />
          <div className='text-column'>
          Technical maintenance included for up to 3 months after project end
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
