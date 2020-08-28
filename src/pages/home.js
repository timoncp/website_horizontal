import React from 'react';

import SocialBtn from '../shared/social-btn';
import ArrowSVG from '../assets/home-arrow.svg';

import './page.css';
import './home.css';

function Home() {
  return (
    <div className='page home'>
      <div id='welcome'>
        <p className='welcome-gray'>welcome to</p>
        <p className='welcome-yellow'>the most notoriously</p>
        <p className='welcome-yellow'>bland developer</p>
        <p className='welcome-yellow'>website <span className='welcome-gray'>in the world.</span></p>
        <div className='home-arrow-container'>
          <img id='home-arrow' src={ArrowSVG} alt='arrow pointing towards title' />
          <span id='home-arrow-text'>*At least that’s what I’ve been told about my color scheme</span>
        </div>
      </div>
      <div className='home-socials'>
        <SocialBtn type='linkedinWhite' linkTo='https://www.linkedin.com/in/timoncp' />
        <SocialBtn type='githubWhite' linkTo='https://www.github.com/timoncp' />
        <SocialBtn type='cvWhite' linkTo='timon_carneci-prove_cv.pdf' />
      </div>
    </div>
  );
}

export default Home;
