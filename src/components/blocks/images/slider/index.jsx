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

export default ({ images }) => (
  <Fragment>
    <style jsx>{styles}</style>

    <Slider {...settings}>
      {images.map(image => (
        <div key={image.imagesImage && image.imagesImage.id}>
          <Image {...image} />
        </div>
      ))}
    </Slider>
  </Fragment>
);
