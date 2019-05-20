import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts, colors } from '../../../tokens';

export default css`
  .title {
    font-family: ${fonts.superla.family};
    font-size: 1.625rem;
    font-style: normal;
    font-weight: ${fonts.superla.weight.extraBold};
    letter-spacing: 0.05rem;
  }

  .title--is-small {
    font-size: 1.25rem;
    font-weight: ${fonts.superla.weight.regular};
  }
`;

export const linkStyles = css.resolve`
  a {
    color: currentColor;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 0.75rem 1rem;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    background-color: ${colors.blue};
  }
`;
