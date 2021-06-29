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
    align-items: center;
    display: flex;
    padding: 1rem 1.5rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  .logo {
    color: ${colors.lightGrey};
    display: flex;
    justify-self: flex-end;
    margin-left: auto;
    width: 100%;
  }

  @media ${mq.tablet} {
    .logo {
      margin-left: 0;
    }
  }

  .logo-label {
    display: none;
    font-family: ${fonts.superla.family};
    font-size: 0.9rem;
    vertical-align: middle;
  }

  @media ${mq.tablet} {
    .logo-label {
      margin-left: auto;
      margin-right: 0.5rem;
    }
  }

  .logo-label-text {
    display: none;
  }

  @media ${mq.tablet} {
    .logo-label-text {
      display: inline;
    }
  }

  .language-switch {
    align-items: center;
    display: flex;
    font-family: ${fonts.superla.family};
    justify-self: flex-end;
    line-height: 1;
    margin-left: auto;
    margin-top: 0.05rem;
  }

  @media ${mq.tablet} {
    .language-switch {
      align-items: center;
      justify-self: flex-start;
      margin-left: 1.5rem;
    }
  }

  .language-switch > a {
    color: currentColor;
    line-height: 1;
  }

  .navigation-container--intro-not-visible .logo-label {
    display: inline-block;
  }
`;

export const iconStyles = css.resolve`
  svg {
    height: 1.75rem;
    margin-left: 0.5rem;
    vertical-align: middle;
    width: auto;
  }
`;

export const languageStyles = css.resolve`
  a {
    color: currentColor;
    font-size: 0.9rem;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  a + a {
    border-left: 1px solid currentColor;
    margin-left: 0.35rem;
    padding-left: 0.35rem;
  }
`;

export const languageActiveStyles = css.resolve`
  a {
    font-size: 0.88rem;
    font-weight: 700;
    position: relative;
    top: 0.025rem;
  }
`;
