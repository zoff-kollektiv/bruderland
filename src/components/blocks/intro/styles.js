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
    margin-bottom: 2rem;
    overflow: hidden;
    position: relative;
  }

  @media ${mq.tablet} {
    .quote-container {
      flex-direction: row;
      flex-wrap: nowrap;
      margin-bottom: 8rem;
    }
  }

  .logo {
    background-color: ${colors.brand};
    color: white;
    height: 40vh;
  }

  @media ${mq.tablet} {
    .logo {
      background-color: ${tinycolor(colors.brand).setAlpha(0.85)};
      height: 100%;
    }
  }

  .image {
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .quote {
    height: 60vh;
    position: relative;
  }

  @media ${mq.tablet} {
    .quote {
      height: 100%;
      margin-top: -5rem;
    }
  }

  .quotation-mark {
    display: block;
    font-size: 5.625rem;
  }

  @media ${mq.tablet} {
    .quotation-mark {
      font-size: 9.375rem;
    }
  }

  .logo,
  .quote {
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    justify-content: center;
    padding: 0 20%;
    width: 100%;
    z-index: 2;
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
    color: ${colors.brand};
    font-family: ${fonts.lapture.family};
    font-size: 2.18rem;
    font-style: italic;
    font-weight: ${fonts.lapture.weight.bold};
    line-height: 1.1;
    margin: 0;
    text-align: center;
  }

  @media ${mq.tablet} {
    blockquote {
      font-size: 2.875rem;
    }
  }

  .lower-intro {
    display: flex;
    justify-content: center;
  }

  .title {
    color: ${colors.brand};
    font-family: ${fonts.superla.family};
    font-size: 2.6rem;
    font-weight: ${fonts.superla.weight.extraBold};
    line-height: 1.2;
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 4.75rem;
    }
  }

  .text {
    font-family: ${fonts.superla.family};
    font-size: 1.25rem;
    font-weight: ${fonts.superla.weight.regular};
    margin-bottom: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    max-width: 520px;
    text-align: center;
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

export const arrowIcon = css.resolve`
  svg {
    color: ${colors.brand};
    bottom: 1rem;
    height: 2.5rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 2.5rem;
  }

  @media ${mq.tablet} {
    svg {
      height: 4rem;
      width: 4rem;
    }
  }
`;
