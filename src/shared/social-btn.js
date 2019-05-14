import React from 'react';

import './social-btn.css';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const objects = {
  linkedin: {
    label: 'LinkedIn',
    src: linkedin
  },
  github: {
    label: 'Github',
    src: github
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
