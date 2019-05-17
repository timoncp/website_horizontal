import React from 'react';

import './section-header.css';

function SectionHeader(props) {
  return (
    <h3 className={`section-header ${props.color}`}>{props.children}</h3>
  );
}

export default SectionHeader;
