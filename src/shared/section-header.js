import React from 'react';

import './section-header.css';

function SectionHeader(props) {
  return (
    <div className='section-header'>
      <svg className='section-header-overline'></svg>
      <h3 className='section-header-text'></h3>
    </div>
  )
}

export default SectionHeader;
