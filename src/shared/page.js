import React from 'react';

import './page.css';

function Work(props) {
  return (
    <div>
      <h1>{props.pageTitle}</h1>
      {props.children}
    </div>
  );
}

export default Work;
