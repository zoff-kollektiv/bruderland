import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts, mq } from '../../../tokens';

export default css`
  figure {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  .container {
    width: 800px;
  }

  figcaption {
    font-family: ${fonts.superla.family};
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5rem;
  }

  .control-button {
    background: transparent;
    border: none;
    line-height: 1;
    position: relative;
  }

  .progress {
    height: 5rem;
    position: relative;
    width: 5rem;
  }

  @media ${mq.tablet} {
    figcaption {
      font-size: 1.25rem;
    }
  }
`;

export const playPauseIconStyles = css.resolve`
  svg {
    height: 1.5rem;
    left: 50%;
    margin-left: 0.05rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.5rem;
  }
`;
