import React from 'react';
import classNames from 'classnames';

import './url.css'

function Url(props) {
  const cls = classNames('url', {
    important: props.important,
  });

  return <a href={props.href} className={cls} title={props.children.toString()}>{props.children}</a>;
}

export default Url;
