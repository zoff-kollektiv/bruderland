import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts, colors, mq } from '../../../tokens';

export default css`
  .title {
    font-family: ${fonts.superla.family};
    font-size: 1.625rem;
    font-style: normal;
    font-weight: ${fonts.superla.weight.extraBold};
    letter-spacing: 0.05rem;
  }
`;

export const linkStyles = css.resolve`
  a {
    color: currentColor;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-left: 3.5rem;
    padding: 0.5rem;
    text-decoration: none;
  }

  @media ${mq.tablet} {
    a {
      margin-left: 3.5rem;
    }
  }

  a:hover,
  a:focus {
    background-color: ${colors.blue};
  }
`;
