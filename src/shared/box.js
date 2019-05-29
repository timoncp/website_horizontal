import React from 'react';

import './box.css';

function Box(props) {
  return (
    <div className='box'>
      <div className='box-header'>
        <h3 className='box-title'>{props.title}</h3>
        <img className={`box-image ${props.imagePosition}`} />
      </div>
      <div className='box-content'>
      {props.children}
      </div>
    </div>
  );
}

Box.defaultProps = {
  imagePosition: 'floating'
};

export default Box;
