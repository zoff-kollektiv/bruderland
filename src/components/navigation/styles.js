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

  .navigation {
    align-items: flex-start;
    color: white;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    min-height: 100vh;
    padding: 5rem 0 1.5rem 0;
  }

  @media ${mq.tablet} {
    .navigation {
      flex-wrap: wrap;
      height: 100%;
      justify-content: flex-start;
    }
  }
`;

export const iconStyles = css.resolve`
  svg {
    height: 2rem;
    vertical-align: middle;
    width: 2rem;
  }
`;
