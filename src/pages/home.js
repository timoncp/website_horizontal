import React from 'react';

import SocialBtn from '../shared/social-btn';
import ArrowSVG from '../assets/home-arrow.svg';

import './page.css';
import './home.css';

function Home() {
  return (
    <div className='page home'>
      <div id='welcome'>
        <p className='welcome-gray'>Welcome to</p>
        <p className='welcome-yellow'>the most notoriously</p>
        <p className='welcome-yellow'>bland developer website</p>
        <p className='welcome-gray'>in the world.</p>
      </div>
      <img id='home-arrow' src={ArrowSVG} alt='arrow pointing towards title' />
      <span id='home-arrow-text'>*At least that’s what I’ve been told about my color scheme</span>
      <div className='home-socials'>
        <SocialBtn type='linkedinWhite' />
        <SocialBtn type='githubWhite' />
      </div>
    </div>
  );
}

export default Home;
