import React from 'react';

import Box from '../shared/box';
import ListItem from '../shared/list-item';

import DatabaseSVG from '../assets/database.svg';
import MobileSVG from '../assets/mobile.svg';
import ServerSVG from '../assets/server.svg';
import ComputerSVG from '../assets/computer.svg';
import MazeSVG from '../assets/maze.svg';

import './page.css';
import './services.css';

function Services(props) {
  return (
    <div className='page services'>
      <Box title='Complete solutions' imagePosition='floating' imageSrc={MazeSVG}>
        I love offering my clients complete solutions. Invariably, any contemporary web solution will require knowledge of a large number of practices related to it. Luckily I got to dip my toe in what I consider to be the 4 main aspects of it.<br /><br />
        If you choose to go for a complete solution, there a number of extra ways in which I can help you, over choosing individual services:<br /><br />
        <ListItem>
          Consultancy at every step of the process
        </ListItem>
        <ListItem>
          Design mockups and app prototyping before beginning the building process
        </ListItem>
        <ListItem>
          Delivery and extended review at previously agreed upon development milestones
        </ListItem>
        <ListItem>
          Very competitive prices, compared to similar full products from corporations or teams of multiple developers
        </ListItem>
        <ListItem>
          Technical maintenance included for up to 3 months after project end
        </ListItem>
      </Box>
      <p className='service-interlude'>In any case... <b>this is what I can do:</b></p>
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
          Custom in-app camera creation<br /><br />
        </Box>
        <Box title='Backend' imagePosition='floating' imageSrc={DatabaseSVG}>
          Backend server and business logic<br />
          API setup and structuring<br />
          SQL, NoSQL and Graph databases<br />
          Live applications via WebSockets<br />
          Secure data storage/encryption<br />
          SSL<br />
          Parallel processing<br />
        </Box>
        <Box title='DevOps' imagePosition='floating' imageSrc={ServerSVG}>
          Software-as-a-Service deployment<br />
          Continuous Integration<br />
          VMs and Docker Containers<br />
          Cloud services using AWS<br />
          Load-balancing<br />
          Automatic error tracking<br />
          Automated testing<br />
        </Box>
      </div>
    </div>
  );
}

export default Services;
