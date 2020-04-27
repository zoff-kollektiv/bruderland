import React, { useRef } from 'react';
import Slider from 'react-slick';

import ChevronLeftIcon from '../../../../static/chevron-left.svg';
import ChevronRightIcon from '../../../../static/chevron-right.svg';
import Constraint from '../../../constraint';
import Image from '../image';

import '../../../../../node_modules/slick-carousel/slick/slick.css';
import styles, { arrowStyles } from './styles';

const settings = {
  adaptiveHeight: false,
  arrows: false,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default ({ images }) => {
  const slider = useRef(null);

  return (
    <section>
      <style jsx>{styles}</style>
      {arrowStyles.styles}

      <Constraint>
        <div className="slider-container">
          <button
            type="button"
            className="slider-control slider-control--prev"
            onClick={() => slider.current.slickPrev()}
            aria-label="Vorheriges Bild"
          >
            <ChevronLeftIcon className={arrowStyles.className} />
          </button>

          <Slider ref={slider} {...settings}>
            {images.map((image) => (
              <div key={image.imagesImage && image.imagesImage.id}>
                <Image {...image} />
              </div>
            ))}
          </Slider>

          <button
            type="button"
            className="slider-control slider-control--next"
            onClick={() => slider.current.slickNext()}
            aria-label="Nächstes Bild"
          >
            <ChevronRightIcon className={arrowStyles.className} />
          </button>
        </div>
      </Constraint>
    </section>
  );
};
