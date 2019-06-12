import React from 'react';

import './social-icon.css';
import linkedin from '../assets/linkedin-color.svg';
import github from '../assets/github-color.svg';
import cv from '../assets/cv-color.svg';

const objects = {
  linkedin: {
    label: 'LinkedIn',
    src: linkedin,
    href: 'https://www.linkedin.com/in/timoncp',
  },
  github: {
    label: 'Github',
    src: github,
    href: 'https://github.com/timoncp',
  },
  cv: {
    label: 'Resume',
    src: cv,
    href: 'timon_carneci-prove_cv.pdf',
  },
};

function SocialIcon(props) {
  return (
    <a href={objects[props.type].href}>
      <img className='social-icon' src={objects[props.type].src} alt={objects[props.type].label} />
    </a>
  );
}

export default SocialIcon;
