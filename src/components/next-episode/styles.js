import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../tokens';

export const arrowLink = css.resolve`
  a {
    color: ${colors.brand};
    display: flex;
    justify-content: center;
    margin-bottom: 8rem;
    margin-top: 1.5rem;
  }
`;

export const arrowDownIcon = css.resolve`
  svg {
    height: 4rem;
    width: 2rem;
  }
`;
