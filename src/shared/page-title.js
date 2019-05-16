import React from 'react';

import './page-title.css';

function PageTitle(props) {
  let cls = 'page-title';

  if (props.color) {
    cls += ` ${props.color}`;
  }

  return <h1 className={cls}>{props.children}</h1>;
}

export default PageTitle;
