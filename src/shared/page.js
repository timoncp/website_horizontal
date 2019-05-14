import React from 'react';

import './page.css';

function Page(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

export default Page;
