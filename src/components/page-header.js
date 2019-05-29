import React from 'react';
import { withRouter } from 'react-router-dom';

import './page-header.css';

const paths = {
  '/': {
    color: 'babyblue',
    label: 'home',
  },
  '/about': {
    color: 'seagreen',
    label: 'about',
  },
  '/work': {
    color: 'paleorange',
    label: 'work',
  },
  '/services': {
    color: 'cherry',
    label: 'services',
  },
}

function PageHeader(props) {
  const { color, label } = paths[props.location.pathname];

  return <div className={`page-header ${color}`}>{label}</div>;
}

export default withRouter(PageHeader);
