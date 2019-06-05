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

  .slider-control:hover,
  .slider-control:focus {
    color: ${colors.brand};
    cursor: pointer;
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
