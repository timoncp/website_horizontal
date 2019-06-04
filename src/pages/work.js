import React from 'react';

import Box from '../shared/box';
import Url from '../shared/url';
import ImageCarousel from '../shared/image-carousel';

import LandscappScreenshots from '../assets/landscapp-screenshots.png';
import LS1 from '../assets/landscapp-screenshots/landscapp1.png';
import LS2 from '../assets/landscapp-screenshots/landscapp2.png';
import LS3 from '../assets/landscapp-screenshots/landscapp3.png';
import LS4 from '../assets/landscapp-screenshots/landscapp4.png';
import LS5 from '../assets/landscapp-screenshots/landscapp5.png';
import LS6 from '../assets/landscapp-screenshots/landscapp6.png';
import LS7 from '../assets/landscapp-screenshots/landscapp7.png';
import LS8 from '../assets/landscapp-screenshots/landscapp8.png';
import LS9 from '../assets/landscapp-screenshots/landscapp9.png';
import LS10 from '../assets/landscapp-screenshots/landscapp10.png';
import LS11 from '../assets/landscapp-screenshots/landscapp11.png';
import LS12 from '../assets/landscapp-screenshots/landscapp12.png';

import BearingPointLogo from '../assets/logo-bearingpoint.jpg';
import CreditSuisseLogo from '../assets/logo-creditsuisse.jpg';
import FindieLogo from '../assets/logo-findie.png';
import SBULogo from '../assets/logo-sbu.png';

import './page.css';
import './work.css';

function Work() {
  return (
    <div className='page work'>
      <Box title='BearingPoint' imagePosition='fixed' imageSrc={BearingPointLogo}>
        <p className='box-content-left'>
          Primarily developed an application called Landscapp, a key performance indicator for application portfolios, with a rule-based calculation engine. During later stages of the projects, I was instructed with managing development activity, client acquisition and expanding existing infrastructure.<br /><br />
          Some key features included creating custom-client instances, internationalisation, impersonation, visualising statistics using different graph types, high-DPI PDF export, XLS/CSV import and export, parallel backend calculations, auditing, hotfixing and more.<br /><br />
          Technologies used: React.js, Redux, Sass, Mocha, Node.js, Express, MongoDB, Linux Shell, Nginx, Docker, Amazon Web Services, Jenkins
        </p>
        <ImageCarousel alt='Screenshots of Landscapp'
          mainSrc={LandscappScreenshots}
          carouselSrc={[LS1, LS2, LS3, LS4, LS5, LS6, LS7, LS8, LS9, LS10, LS11, LS12]}
        />
      </Box>
      <Box title='CreditSuisse' imagePosition='fixed' imageSrc={CreditSuisseLogo}>
        Developed tools and processes to be used by front office when submitting orders for the newly launched DigiPigi, a digital piggy bank.<br /><br />
        Expanded on and renewed integration tests, assuring existing features worked as expected after new code was pushed.<br /><br />
        Technologies used: Java, Appway, Selenium, TeamCity, TestNG, HTML, CSS, xPath, SVN, JIRA<br /><br />
      </Box>
      <Box title='Findie' imagePosition='fixed' imageSrc={FindieLogo}>
        Built a page management admin app to quickly generate and customize the look and content of white-label instances.<br /><br />
        Built a raw tool that extracts interesting scenes in a video file based on sound activity.<br /><br />
        The live app can be accesed at <Url href='https://www.findie.me'>www.findie.me</Url>.<br /><br />
        Technologies used: Node.js, React, ffMPEG, Linux Shell, GitLab
      </Box>
      <Box title='Soft Business Union' imagePosition='fixed' imageSrc={SBULogo}>
        Developed prototypes for two mobile applications, part of a larger IT system implemented for the local police in Bucharest. Maps, forms, open claims, in-app camera and location services were some key features of the apps.<br /><br />
        Introduced the React environment to the company and conducted tutorials in React, React Native and Redux.<br /><br />
        Technologies used: React Native, Android, iOS, JavaScript ES6, Maps, Leaflet, Node.js, PostgreSQL
      </Box>
    </div>
  );
}

export default Work;
