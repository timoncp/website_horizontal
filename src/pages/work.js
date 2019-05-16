import React from 'react';

import PageTitle from '../shared/page-title';
import SectionHeader from '../shared/section-header';

import './_common.css';
import './work.css';

function Work() {
  return (
    <div className='page about'>
      <PageTitle color='paleorange'>previous work</PageTitle>
      <div className='section'>
        <SectionHeader color='paleorange'>BearingPoint</SectionHeader>
        <div className='text-column'></div>
      </div>
    </div>
  );
}

export default Work;
