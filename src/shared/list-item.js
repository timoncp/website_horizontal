import React from 'react';

import CheckmarkCustomSVG from '../assets/checkmark-custom.svg';

import './list-item.css';

function ListItem(props) {
  return (
    <li className='list-item'>
      <img className='list-item-checkmark' src={CheckmarkCustomSVG} alt='Checkmark' />
      <b>{props.children}</b>
    </li>
  );
}

export default ListItem;
