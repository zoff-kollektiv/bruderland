import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import tinycolor from 'tinycolor2';

import { colors, fonts, mq } from '../../../tokens';

export default css`
  header {
    margin-bottom: 2rem;
  }

  .quote-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  @media ${mq.tablet} {
    .quote-container {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  .quote-container::before {
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 5;
  }

  .logo {
    background-color: ${colors.brand};
    color: white;
    flex: 1;
    min-height: 40vh;
    order: -1;
  }

  @media ${mq.tablet} {
    .logo {
      background-color: ${tinycolor(colors.brand).setAlpha(0.85)};
      mix-blend-mode: hard-light;
      height: 100%;
    }
  }

  .image {
    flex: 1;
    min-height: 50%;
    object-fit: cover;
  }

  @media ${mq.tablet} {
    .image {
      left: 50%;
      min-height: 100%;
      min-width: 100%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }

  .quote {
    height: 50vh;
    justify-content: flex-end;
    padding: 0 1rem 4rem 1rem;
    position: absolute;
    top: 50%;
  }

  @media ${mq.tablet} {
    .quote {
      height: 100%;
      justify-content: flex-start;
      padding: 0 25%;
      position: relative;
      top: auto;
    }
  }

  .logo,
  .quote {
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    width: 100%;
    z-index: 10;
  }

  .logo {
    justify-content: center;
    padding: 0 25%;
  }

  @media ${mq.tablet} {
    .logo,
    .quote {
      padding-left: 5rem;
      padding-right: 5rem;
      width: 50%;
    }
  }

  blockquote {
    color: white;
    font-family: ${fonts.lapture.family};
    font-size: 2rem;
    font-style: italic;
    font-weight: ${fonts.lapture.weight.bold};
    line-height: 1.2;
    margin: 0;
    padding-top: 2.5rem;
    text-align: center;
  }

  @media ${mq.tablet} {
    blockquote {
      font-size: 2.875rem;
      line-height: 1.3;
      padding-top: 5rem;
    }
  }

  @media ${mq.wide} {
    blockquote {
      font-size: 3.75rem;
      padding-top: 10rem;
    }
  }

  .lower-intro {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .title {
    color: ${colors.brand};
    font-family: ${fonts.superla.family};
    font-size: 2.25rem;
    font-weight: ${fonts.superla.weight.extraBold};
    line-height: 1;
    margin: 2rem 1.5rem;
    text-align: center;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 3rem;
      margin: 6rem 0.5rem 1.5rem 0.5rem;
    }
  }

  @media ${mq.desktop} {
    .title {
      font-size: 4rem;
      margin: 6rem 0.5rem 2rem 0.5rem;
    }
  }

  @media ${mq.wide} {
    .title {
      font-size: 4.75rem;
    }
  }

  .caption {
    color: ${colors.grey};
    font-family: ${fonts.superla.family};
    font-size: 0.7rem;
    font-weight: ${fonts.superla.weight.regular};
    letter-spacing: 0.025rem;
    line-height: 1.33;
    margin-left: auto;
    margin-right: 1rem;
    margin-top: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: right;
  }

  @media ${mq.tablet} {
    .caption {
      font-size: 0.8rem;
      margin-right: 1.5rem;
      margin-top: 1rem;
      padding-left: 0;
      padding-right: 0;
    }
  }

  :global(.caption > p) {
    margin-top: 0;
  }
`;

export const logoIcon = css.resolve`
  svg {
    width: 12rem;
  }

  @media ${mq.tablet} {
    svg {
      width: 18rem;
    }
  }

  @media ${mq.desktop} {
    svg {
      width: 28rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const logoLabel = css.resolve`
  span {
    font-family: ${fonts.superla.family};
    font-size: 1.15rem;
    font-weight: ${fonts.superla.weight.extraBold};
    letter-spacing: 0.1rem;
    line-height: 1;
    padding-left: 0.65rem;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    span {
      font-size: 1.75rem;
      letter-spacing: 0.1rem;
      padding-left: 0.75rem;
    }
  }

  @media ${mq.desktop} {
    span {
      font-size: 2.75rem;
      letter-spacing: 0.3rem;
      padding-left: 1.25rem;
    }
  }
`;

export const logoLabelEn = css.resolve`
  span {
    font-family: ${fonts.superla.family};
    font-size: 0.9rem;
    font-weight: ${fonts.superla.weight.extraBold};
    letter-spacing: 0.1rem;
    line-height: 1;
    padding-left: 0.6rem;
    text-transform: uppercase;
  }

  @media ${mq.tablet} {
    span {
      font-size: 1.4rem;
      letter-spacing: 0.1rem;
      padding-left: 0.85rem;
    }
  }

  @media ${mq.desktop} {
    span {
      font-size: 1.95rem;
      letter-spacing: 0.3rem;
      padding-left: 1.25rem;
    }
  }
`;

export const logoTagline = css.resolve`
  span {
    display: flex;
    font-family: ${fonts.superla.family};
    font-size: 1rem;
    font-weight: ${fonts.superla.weight.extraBold};
    justify-self: flex-end;
    letter-spacing: 0.1rem;
    line-height: 1;
    margin-left: auto;
    text-align: right;
    text-transform: uppercase;
    width: 50%;
  }

  @media ${mq.tablet} {
    span {
      font-size: 1.5rem;
      letter-spacing: 0.1rem;
      padding-left: 0.75rem;
    }
  }

  @media ${mq.desktop} {
    span {
      font-size: 1.5rem;
      letter-spacing: 0.3rem;
      padding-left: 1.25rem;
    }
  }
`;

export const nextLink = css.resolve`
  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;

export const logoLink = css.resolve`
  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    opacity: 0.8;
  }
`;

export const arrowIcon = css.resolve`
  svg {
    color: white;
    bottom: 1.5rem;
    height: 2rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 2rem;
  }

  @media ${mq.tablet} {
    svg {
      height: 2.5rem;
      width: 3rem;
    }
  }

  @media ${mq.desktop} {
    svg {
      height: 3rem;
      width: 3rem;
    }
  }
`;
