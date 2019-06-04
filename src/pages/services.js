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

function Services() {
  return (
    <div className='page services'>
      <Box title='Complete solutions' imagePosition='floating' imageSrc={MazeSVG}>
        I love offering my clients complete solutions. For most small to medium size applications, a developer should be able to handle all technical intricacies required. What’s more important is understanding your client's business needs and managing the development path correctly.<br /><br />
        Should you wish to solely hire me as a Frontend, Backend or Mobile Developer or DevOps engineer for your project though, please see my individual services below.<br /><br />
        Here are some of the extras that come with building a complete solution together:<br /><br />
        <ListItem>
          Consultancy at every step of the process
        </ListItem>
        <ListItem>
          Very competitive prices, compared to outsourced teams of developers
        </ListItem>
        <ListItem>
          Technical maintenance included for up to 3 months after project end
        </ListItem>
        <ListItem>
          Delivery and extended review at previously agreed upon development milestones
        </ListItem>
        <ListItem>
          Design mockups and app prototyping before beginning the building process
        </ListItem>
      </Box>
      <p className='service-interlude'>Without further ado... <b>here are a few things I can do:</b></p>
      <div className='service-boxes'>
        <Box title='Web & UI' imagePosition='floating' imageSrc={ComputerSVG}>
          React-based applications<br />
          Design in Adobe XD and Sketch<br />
          Responsive design<br />
          Data visualisation using D3<br />
          SVG / Canvas elements<br />
          Rapid prototyping
        </Box>
        <Box title='Mobile' imagePosition='floating' imageSrc={MobileSVG}>
          Hybrid mobile app development<br />
          Deployment on iOS and Android<br />
          Map and location services<br />
          Custom in-app camera creation<br />
          Shared components with browser codebase<br />
        </Box>
        <Box title='Backend' imagePosition='floating' imageSrc={DatabaseSVG}>
          Server and routing<br />
          Form validation using Joi<br />
          REST APIs<br />
          SQL, NoSQL and Graph databases<br />
          Secure data storage/encryption<br />
          SSL<br />
          Parallel processing<br />
        </Box>
        <Box title='DevOps' imagePosition='floating' imageSrc={ServerSVG}>
          Deploying SaaS applications<br />
          Multi-environment development<br />
          Continuous Integration<br />
          VMs and Docker Containers<br />
          Cloud services using AWS<br />
          Error tracking software<br />
          Integration testing<br />
        </Box>
      </div>
    </div>
  );
}

export default Services;
