import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts, colors, mq } from '../../tokens';

export default css`
  :global(.modal) {
    background-color: rgb(77, 77, 77);
    color: white;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 30;
  }

  @media ${mq.tablet} {
    :global(.modal) {
      height: 100%;
      position: fixed;
    }
  }

  :global(.ReactModal__Body--open),
  :global(.ReactModal__Html--open) {
    overflow: hidden;
  }

  .navigation {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100vh;
    max-height: 100%;
    padding: 4rem 0.5rem;
    width: 100%;
  }

  .navigation-list {
    align-items: flex-start;
    color: white;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
    width: 90%;
  }

  @media ${mq.tablet} {
    .navigation-list {
      flex-wrap: wrap;
      height: 100%;
      justify-content: space-between;
    }
  }

  .navigation-container {
    display: flex;
    padding: 1rem 1.5rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  .logo {
    align-self: flex-end;
    color: ${colors.lightGrey};
    margin-left: auto;
    opacity: 0;
    transition: opacity 200ms ease;
  }

  .logo-label {
    display: inline-block;
    font-family: ${fonts.superla.family};
    font-size: 0.9rem;
    margin-right: 0.5rem;
    vertical-align: middle;
  }

  .navigation-container--intro-not-visible .logo {
    opacity: 1;
  }
`;

export const iconStyles = css.resolve`
  svg {
    height: 2rem;
    vertical-align: middle;
    width: 2rem;
  }
`;
