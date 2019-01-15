import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mq, fonts } from '../../../tokens';

export default css`
  section {
    position: relative;
  }

  img {
    height: auto;
    width: 100%;
  }

  audio {
    display: none;
  }

  .control-button {
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 50%;
    color: ${colors.brand};
    display: flex;
    flex: 0 0 auto;
    height: 4.5rem;
    line-height: 1;
    padding: 0;
    position: relative;
    width: 4.5rem;
  }

  @media ${mq.tablet} {
    .control-button {
      height: 10rem;
      width: 10rem;
    }
  }

  .control-button:hover,
  .control-button:focus {
    color: ${colors.brand};
    cursor: pointer;
  }

  .control-button-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  @media ${mq.tablet} {
    .control-button-container {
      right: 8rem;
      top: 6rem;
    }
  }

  .current-time {
    color: ${colors.brand};
    font-family: ${fonts.superla.family};
    font-size: 1rem;
    font-weight: ${fonts.superla.weight.regular};
    margin-bottom: 0;
    margin-top: 0.25rem;
    white-space: nowrap;
  }

  @media ${mq.tablet} {
    .current-time {
      font-size: 1.125rem;
      margin-top: 1rem;
    }
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
      height: 4rem;
      width: 4rem;
    }
  }
`;
