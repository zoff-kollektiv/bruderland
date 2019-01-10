import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts, mq } from '../../../tokens';

export default css`
  figure {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1.5rem 0;
    width: 100%;
  }

  @media ${mq.tablet} {
    figure:not(.is-fullsize) {
      margin-left: auto;
      margin-right: auto;
      width: 750px;
    }
  }

  .container {
    width: 800px;
  }

  figcaption {
    font-family: ${fonts.superla.family};
    font-size: 1rem;
    margin-right: 2rem;
  }

  @media ${mq.tablet} {
    figcaption {
      font-size: 1.15rem;
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
  }

  .control-button {
    align-self: flex-end;
    background: transparent;
    border: none;
    border-radius: 50%;
    display: flex;
    flex: 0 0 auto;
    height: 4.5rem;
    line-height: 1;
    margin-left: auto;
    padding: 0;
    position: relative;
    width: 4.5rem;
  }

  @media ${mq.tablet} {
    .control-button {
      height: 6rem;
      width: 6rem;
    }
  }

  .control-button:hover,
  .control-button:focus {
    color: ${colors.brand};
    cursor: pointer;
  }

  video {
    width: 100%;
  }
`;

export const playPauseIconStyles = css.resolve`
  svg {
    height: 1.25rem;
    left: 50%;
    margin-left: 0.05rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.25rem;
  }

  @media ${mq.tablet} {
    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;
