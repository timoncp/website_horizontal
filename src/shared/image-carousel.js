import React, { useState } from 'react';
import classNames from 'classnames';

import CloseIcon from '../assets/close-icon-white.svg';

import './image-carousel.css';

function ImageCarousel(props) {
  const [isCarouselVisible, setCarouselVisibility] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const carouselCls = classNames('image-carousel-overlay', {
    visible: isCarouselVisible,
  });

  const changeImgIndex = () => {
    let index = imgIndex + 1;

    if (index === props.carouselSrc.length) index = 0;

    setImgIndex(index);
  };

  const handleOverlayClose = (e) => {
    if (!isCarouselVisible) return;

    const openImage = document.getElementsByClassName('image-carousel-current')[0];

    if (e.target !== openImage) {
      setCarouselVisibility(false);
    }
  }

  return (
    <div className='image-carousel'>
      <img className='image-carousel-main'
        src={props.mainSrc}
        onClick={() => setCarouselVisibility(!isCarouselVisible)}
        alt={props.alt}
      />
      <div className={carouselCls} onClick={handleOverlayClose}>
        <img className='image-carousel-current'
          src={props.carouselSrc[imgIndex]}
          onClick={changeImgIndex}
          alt={props.alt}
        />
        <img className='image-carousel-close'
          alt='Close button'
          src={CloseIcon}
          onClick={() => setCarouselVisibility(false)}
        />
      </div>
    </div>
  )
}

export default ImageCarousel;
