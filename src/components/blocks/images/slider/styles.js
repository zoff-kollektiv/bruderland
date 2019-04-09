import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mq } from '../../../../tokens';

export default css`
  section {
    display: flex;
    justify-content: center;
  }

  .slider-container {
    position: relative;
  }

  .slider-control {
    background: transparent;
    border: 0;
    color: ${colors.lightGrey};
    position: absolute;
    top: 7rem;
    z-index: 10;
  }

  @media ${mq.tablet} {
    .slider-control {
      top: 12rem;
    }
  }

  .slider-control--prev {
    left: -1.75rem;
  }

  @media ${mq.tablet} {
    .slider-control--prev {
      left: -4.5rem;
    }
  }

  .slider-control--next {
    right: -1.75rem;
  }

  @media ${mq.tablet} {
    .slider-control--next {
      right: -4.5rem;
    }
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
    height: 1.5rem;
    width: 1.5rem;
  }

  @media ${mq.tablet} {
    svg {
      height: 2rem;
      width: 2rem;
    }
  }
`;
