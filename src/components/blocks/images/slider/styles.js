import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default css`
  .slider-container {
    position: relative;
  }

  .slider-control {
    background: transparent;
    border: 0;
    position: absolute;
    top: 10rem;
    z-index: 10;
  }

  .slider-control--prev {
    left: 0;
  }

  .slider-control--next {
    right: 0;
  }

  :global(.slick-slider) {
    user-select: none;
    touch-action: pan-y;
  }

  :global(.slick-list) {
    display: block;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    transform: translateZ(0);
  }

  :global(.slick-track) {
    display: block;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 0;
  }

  :global(.slick-track::after),
  :global(.slick-track::before) {
    display: table;
    content: '';
  }

  :global(.slick-slide) {
    float: left;
    height: 100%;
    min-height: 1px;
  }
`;

export const arrowStyles = css.resolve`
  svg {
    height: 2rem;
    width: 2rem;
  }
`;
