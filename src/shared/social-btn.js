import React from 'react';

import './social-btn.css';
import linkedin from '../assets/linkedin.svg';
import linkedinWhite from '../assets/linkedin-white.svg';
import github from '../assets/github.svg';
import githubWhite from '../assets/github-white.svg';

const objects = {
  linkedin: {
    label: 'LinkedIn',
    src: linkedin
  },
  linkedinWhite: {
    label: 'LinkedIn',
    src: linkedinWhite
  },
  github: {
    label: 'Github',
    src: github
  },
  githubWhite: {
    label: 'Github',
    src: githubWhite
  }
}

function SocialBtn(props) {
  return (
    <div className='social-btn'>
      <img src={objects[props.type].src} alt={objects[props.type].label} />
      <span>{objects[props.type].label}</span>
    </div>
  );
}

export default SocialBtn;
