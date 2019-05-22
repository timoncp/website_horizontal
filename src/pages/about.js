import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from '../shared/page-title';
import PageSubtitle from '../shared/page-subtitle';
import CtaButton from '../shared/cta-btn';

import './page.css';
import './about.css';

import PortraitJPG from '../assets/portrait.jpg';

function About() {
  return (
    <div className='page about'>
      <PageTitle color='seagreen'>about</PageTitle>
      <PageSubtitle>Hello! <span role='img' aria-label='Waving Hand'>👋🏻</span></PageSubtitle>
      <div className='text-column'>
      My name is Timon Cârneci-Pröve and I’m a <i>Fullstack Developer</i> based in Bucharest. <br /><br />
      I build <i>custom web applications</i> for small to medium enterprises. <br /><br />
      Having worked for four over years in corporations, startups and on individual projects, I developed the strength of understanding the technical, as well as the business and managerial aspects of a project. This is why is love offering my clients <i>complete solutions, from prototype to deployment, from sketch to final product</i>. <br /><br />
      However, I do offer <i><Link to='/services'>individual services</Link></i> as well if needed.
      </div>
      <div className='text-column'>
      With an initial university background in Media and Music, I finished a number of courses in Computer Science at the FernUni Hagen long-distance.<br /><br />
      There I had the wonderful opportunity to delve into subjects such as cryptography, advanced algebra, discrete mathematics and data structures and algorithms.<br /><br />
      Expertise: <i>React-based applications, Infrastructure as code, Software as a service apps</i><br /><br />
      Curiosities: <i>Data Visualisation, Machine Learning, Server-less apps</i>
      </div>
      <div id='photo-and-cta'>
        <img id='portrait' src={PortraitJPG} alt='Timon' />
        <CtaButton href='mailto:timon.carneciprove@icloud.com'>
          Get In Touch
        </CtaButton>
        <CtaButton>View Resume</CtaButton>
      </div>
    </div>
  );
}

export default About;
