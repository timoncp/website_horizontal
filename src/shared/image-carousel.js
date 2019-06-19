import React, { useState } from 'react';
import classNames from 'classnames';

import CloseIcon from '../assets/close-icon-white.svg';
import CarouselArrowLeft from '../assets/carousel-arrow-left.svg';
import CarouselArrowRight from '../assets/carousel-arrow-right.svg';

import './image-carousel.css';

function ImageCarousel(props) {
  const [isCarouselVisible, setCarouselVisibility] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const carouselCls = classNames('image-carousel-overlay', {
    visible: isCarouselVisible,
  });

  const nextImg = (e) => {
    e.stopPropagation();

    let index = imgIndex + 1;

    if (index === props.carouselSrc.length) index = 0;

    setImgIndex(index);
  };

  const previousImg = (e) => {
    e.stopPropagation();

    let index = imgIndex - 1;

    if (index < 0) index = props.carouselSrc.length - 1;

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
        <img className='image-carousel-arrow back'
          src={CarouselArrowLeft}
          onClick={previousImg}
          alt='Back arrow'
        />
        <img className='image-carousel-current'
          src={props.carouselSrc[imgIndex]}
          onClick={nextImg}
          alt={props.alt}
        />
        <img className='image-carousel-arrow forward'
          src={CarouselArrowRight}
          onClick={nextImg}
          alt='Back arrow'
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
