import React from 'react';

import './social-btn.css';
import linkedinWhite from '../assets/linkedin-white.svg';
import githubWhite from '../assets/github-white.svg';
import cvWhite from '../assets/cv-white.svg';

const objects = {
  linkedinWhite: {
    label: 'LinkedIn',
    src: linkedinWhite
  },
  githubWhite: {
    label: 'Github',
    src: githubWhite
  },
  cvWhite: {
    label: 'Resume',
    src: cvWhite
  }
}

function SocialBtn(props) {
  return (
    <div className='social-btn'>
      <img src={objects[props.type].src} alt={objects[props.type].label} />
      <a href={props.linkTo}>{objects[props.type].label}</a>
    </div>
  );
}

export default SocialBtn;
