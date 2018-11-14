import React, { Fragment } from 'react';
import Slider from 'react-slick';

import Image from '../image';
import styles from './styles';

const settings = {
  adaptiveHeight: true,
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

const slider = React.createRef();

export default ({ images }) => (
  <Fragment>
    <style jsx>{styles}</style>

    <div className="slider-container">
      <button
        type="button"
        className="slider-control slider-control--prev"
        onClick={() => slider.current.slickNext()}
      >
        Zurück
      </button>

      <Slider ref={slider} {...settings}>
        {images.map(image => (
          <div key={image.imagesImage && image.imagesImage.id}>
            <Image {...image} />
          </div>
        ))}
      </Slider>

      <button
        type="button"
        className="slider-control slider-control--next"
        onClick={() => slider.current.slickNext()}
      >
        Weiter
      </button>
    </div>
  </Fragment>
);
