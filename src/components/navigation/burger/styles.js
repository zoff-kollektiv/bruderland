import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts } from '../../../tokens';

export default css`
  a {
    align-items: center;
    color: ${colors.lightGrey};
    cursor: pointer;
    display: flex;
    font-family: ${fonts.superla.family};
    line-height: 1;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: white;
  }
`;

export const iconStyles = css.resolve`
  svg {
    height: 1.25rem;
    margin-right: 0.5rem;
    width: 1.25rem;
  }
`;
