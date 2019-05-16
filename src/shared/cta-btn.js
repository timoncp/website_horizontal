import React from 'react';

import './cta-btn.css';

function CtaButton(props) {
  return (
    <button className='cta-button'>
      <a href={props.href}>
      {props.children}
      </a>
    </button>
  );
}

export default CtaButton;
