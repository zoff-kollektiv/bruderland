import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts, colors, mq } from '../../../tokens';

export default css`
  .title {
    border-bottom: 2px solid transparent;
    font-family: ${fonts.superla.family};
    font-size: 1.15rem;
    font-style: normal;
    font-weight: ${fonts.superla.weight.extraBold};
    letter-spacing: 0.05rem;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 1.35rem;
      letter-spacing: 0.05rem;
    }
  }

  @media ${mq.desktop} {
    .title {
      font-size: 1.625rem;
    }
  }

  .intro {
    font-family: ${fonts.superla.family};
    font-size: 0.9rem;
    font-weight: ${fonts.superla.weight.regular};
    margin-bottom: 0;
    margin-top: 0.25rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .intro {
      font-size: 1rem;
      margin-top: 0.35rem;
    }
  }

  @media ${mq.desktop} {
    .intro {
      font-size: 1.05rem;
      margin-top: 0.5rem;
    }
  }
`;

export const linkStyles = css.resolve`
  span,
  a {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0.75rem 1rem;
    text-decoration: none;
  }

  a {
    color: currentColor;
  }

  @media ${mq.tablet} {
    padding: 0.85rem 3rem;
  }

  @media ${mq.desktop} {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  a[aria-current='page'],
  a:hover,
  a:focus {
    background-color: ${colors.blue};
  }

  span {
    color: rgb(165, 165, 165);
  }
`;
