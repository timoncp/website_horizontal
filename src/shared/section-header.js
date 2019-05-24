import React from 'react';

import './section-header.css';

function SectionHeader(props) {
  let txtCls = `section-header-text ${props.color}`;

  return (
    <div className='section-header'>
      <h3 className={txtCls}>{props.children}</h3>
      {props.icon && <img src={props.icon} className='section-header-svg' alt={props.alt} />}
    </div>
  );
}

export default SectionHeader;
