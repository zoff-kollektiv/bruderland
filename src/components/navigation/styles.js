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
      padding-bottom: 1.5rem;
      padding-top: 5rem;
    }
  }

  @media ${mq.desktop} {
    .navigation {
      max-width: 80rem;
      padding-top: 4.5rem;
    }
  }

  .navigation-list {
    color: white;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
    width: 100%;
  }

  @media ${mq.tablet} {
    .navigation-list {
      column-count: 2;
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
    display: flex;
    margin-left: auto;
  }

  .logo-label {
    display: inline-block;
    font-family: ${fonts.superla.family};
    font-size: 0.9rem;
    margin-right: 1.5rem;
    opacity: 0;
    transition: opacity 200ms ease;
    vertical-align: middle;
  }

  .language-switch {
    align-items: center;
    display: flex;
    font-family: ${fonts.superla.family};
    font-size: 0.9rem;
    justify-self: flex-end;
    margin-right: 0.5rem;
    margin-top: -0.1rem;
  }

  @media ${mq.tablet} {
    .language-switch {
      align-items: flex-start;
      margin-top: 0.35rem;
    }
  }

  .language-switch > a {
    color: currentColor;
  }

  .navigation-container--intro-not-visible .logo-label {
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

export const languageStyles = css.resolve`
  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  a + a {
    border-left: 1px solid rgba(205, 205, 205, 0.25);
    margin-left: 0.35rem;
    padding-left: 0.35rem;
  }
`;
