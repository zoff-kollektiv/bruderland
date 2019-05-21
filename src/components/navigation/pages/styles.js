import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts, colors, mq } from '../../../tokens';

export default css`
  ul {
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
    width: 100%;
  }

  .list-item--is-small ul {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .list-item {
    flex: 0 0 auto;
    width: 100%;
  }

  @media ${mq.tablet} {
    .list-item {
      width: 50%;
    }
  }

  .title {
    font-family: ${fonts.superla.family};
    font-size: 1.15rem;
    font-style: normal;
    font-weight: ${fonts.superla.weight.extraBold};
    letter-spacing: 0.05rem;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 1.5rem;
    }
  }

  @media ${mq.desktop} {
    .title {
      font-size: 1.625rem;
    }
  }

  .title--is-small {
    font-size: 1rem;
    font-weight: ${fonts.superla.weight.regular};
  }

  @media ${mq.tablet} {
    .title--is-small {
      font-size: 1.25rem;
    }
  }
`;

export const linkStyles = css.resolve`
  a {
    color: currentColor;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0.5rem 1rem;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    background-color: ${colors.blue};
  }
`;
