import React from 'react';
import { Link } from 'react-router-dom';

import Box from '../shared/box';
import CtaButton from '../shared/cta-btn';

import './page.css';
import './about.css';

import PortraitJPG from '../assets/portrait-color.jpg';

function About(props) {
  const breakLine = () => (props.viewportWidth >= 1024) ? <br /> : null;

  return (
    <div className='page about'>
      <Box title='Greetings! 👋🏻' imagePosition='none'>
        <img id='portrait' src={PortraitJPG} alt='Timon' />
        My name is Timon Cârneci-Pröve and I’m a <i>Fullstack Developer</i> based {breakLine()}in Bucharest. <br /><br />
        I build <i>custom web applications</i> for small to medium enterprises. <br /><br />
        Having worked for four over years in corporations, startups and on individual projects, I developed the strength of understanding the technical, managerial and business-related aspects of a project. This is why I love offering my clients <i>complete solutions, from prototype to deployment, from sketch to final product</i>. <br /><br />
        However, I do offer <i><Link to='/services'>individual services</Link></i> as well if needed.<br /><br />
        With an initial university background in Media and Music, I finished a number of courses in Computer Science at the FernUni Hagen long-distance.<br /><br />
        There I had the wonderful opportunity to delve into subjects such as cryptography, advanced algebra, discrete mathematics and data structures and algorithms.<br /><br />
        Expertise: <i>React-based applications, Infrastructure as code, Software as a service apps</i><br /><br />
        Curiosities: <i>Data Visualisation, Machine Learning, Server-less apps</i>
        <div className='cta-buttons'>
          <CtaButton href='mailto:timon.carneciprove@icloud.com'>Get In Touch →</CtaButton>
          <CtaButton>View Resume →</CtaButton>
        </div>
      </Box>
    </div>
  );
}

export default About;
