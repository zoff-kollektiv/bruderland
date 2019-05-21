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
      align-items: center;
      display: flex;
      justify-content: center;
      height: 100%;
      position: fixed;
    }
  }

  .navigation {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 3.5rem 0.5rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .navigation {
      padding-bottom: 2.5rem;
      padding-top: 2.5rem;
    }
  }

  @media ${mq.desktop} {
    .navigation {
      max-height: 45rem;
      max-width: 80rem;
      padding-bottom: 2.5rem;
      padding-top: 2.5rem;
    }
  }

  .navigation-list {
    color: white;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    max-width: 80rem;
    padding-left: 0;
    width: 100%;
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
