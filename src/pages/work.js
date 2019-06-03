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
          Primarily worked on a project called Landscapp, a custom key performance indicator for application portfolios, with a rule-based calculation engine.<br /><br />
          Had the chance to conduct this project from start up until version 2. Was instructed with monitoring development activity and expanding existing infrastructure.<br /><br />
          Technologies used: React.js, Redux, Sass, Mocha, Node.js, Express, MongoDB, Nginx, Docker, Amazon Web Services, Jenkins
        </p>
        <ImageCarousel alt='Screenshots of Landscapp'
          mainSrc={LandscappScreenshots}
          carouselSrc={[LS1, LS2, LS3, LS4, LS5, LS6, LS7, LS8, LS9, LS10, LS11, LS12]}
        />
      </Box>
      <Box title='CreditSuisse' imagePosition='fixed' imageSrc={CreditSuisseLogo}>
        Developed tools and processes to be used by front office when creating orders for the newly launched DigiPigi savings pig.<br /><br />
        Expanded on and renewed existing full integration test cases.<br /><br />
        Technologies used: Java, Appway, Selenium, TeamCity, TestNG, HTML, CSS, SVN<br /><br />
      </Box>
      <Box title='Soft Business Union' imagePosition='fixed' imageSrc={SBULogo}>
        Developed the prototypes for two mobile applications, within a larger system implemented for the local police station in Bucharest. Maps, Forms, Open Claims, and localisation were features  of both the citizen and the police office app.<br /><br />
        Technologies used: React Native, Android, iOS,  JavaScript ES6,  Maps, Leaflet, Node.js, PostgreSQL
      </Box>
      <Box title='Findie' imagePosition='fixed' imageSrc={FindieLogo}>
        Built a page management admin app to quickly generate and customize the look and content of white-label instances.<br /><br />
        Built a raw tool that extracts interesting scenes in a video file based on sound activity.<br /><br />
        The live app can be accesed at <Url href='https://www.findie.me'>www.findie.me</Url>.<br /><br />
        Technologies used: Node.js, React, ffMPEG, Linux Shell, GitLab
      </Box>
    </div>
  );
}

export default Work;
