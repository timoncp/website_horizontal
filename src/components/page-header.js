import React from 'react';
import { withRouter } from 'react-router-dom';

import './page-header.css';

const paths = {
  '/': {
    cls: 'babyblue',
    label: 'home',
  },
  '/about': {
    cls: 'seagreen',
    label: 'about',
  },
  '/work': {
    cls: 'paleorange',
    label: 'work',
  },
  '/services': {
    cls: 'cherry',
    label: 'services',
  },
}

function PageHeader(props) {
  if (props.location.pathname === '/attributions') return null;

  const { cls, label } = paths[props.location.pathname];

  return <div className={`page-header ${cls}`}>{label}</div>;
}

export default withRouter(PageHeader);
