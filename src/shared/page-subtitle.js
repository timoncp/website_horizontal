import React from 'react';

import './page-subtitle.css';

function PageSubtitle(props) {
  return <h3 className='page-subtitle'>{props.children}</h3>;
}

export default PageSubtitle;
