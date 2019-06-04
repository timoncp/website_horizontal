import React from 'react';
import { Link } from 'react-router-dom';

import Box from '../shared/box';
import CtaButton from '../shared/cta-btn';

import './page.css';
import './about.css';

import PortraitJPG from '../assets/portrait-color.jpg';

function About(props) {
  const breakLine = (width) => (props.viewportWidth >= width) ? <br /> : null;

  return (
    <div className='page about'>
      <Box title='Greetings! 👋🏻' imagePosition='none'>
        <img id='portrait' src={PortraitJPG} alt='Timon' />
        My name is Timon Carneci-Pröve and I’m a <i>Fullstack Developer</i> {breakLine(1024)}based in Bucharest. <br /><br />
        Want to build and deploy a specific web application that will speed{breakLine(1280)} you and your company up, but need someone to bring your idea to life? Then I am your man. I build <i>web applications of small to medium size</i>. <br /><br />
        Having worked for over four years in corporations, startups and on individual projects, I developed the strength of understanding the technical, managerial and business-related aspects of a project. This is why I love offering my clients <i>complete solutions, from initial sketches to deployment, from prototype to production</i>. <br /><br />
        However, I do offer <i><Link to='/services'>individual services</Link></i> as well if needed: Frontend, Mobile, Backend, and DevOps.<br /><br />
        Not being satisfied with my initial university background in Media and Music, I decided to ground my mostly practical programming experience by finishing a number of courses in Computer Science at the FernUni Hagen during evenings and weekends after work.
        There I had the wonderful opportunity to delve into subjects such as data scructures and algorithms, advanced algebra and analysis, discrete mathematics, cryptography and databases.<br /><br />
        Expertise: <i>React-based applications, Software-as-a-service (SaaS) Applications, Infrastructure</i><br /><br />
        Curiosities: <i>Data Visualisation, Machine Learning, Serverless apps</i>
        <div className='cta-buttons'>
          <CtaButton href='mailto:timon.carneciprove@icloud.com'>Get In Touch →</CtaButton>
          <CtaButton href='timon_carneci-prove_cv.pdf'>View Resume →</CtaButton>
        </div>
      </Box>
    </div>
  );
}

export default About;
