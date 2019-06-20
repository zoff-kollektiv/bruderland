import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { mq } from '../../../tokens';

export default css`
  section {
    display: flex;
    justify-content: center;
  }

  ul {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding-left: 0;
  }

  li {
    width: 33%;
  }

  @media ${mq.tablet} {
    li {
      width: 20%;
    }
  }

  img {
    height: auto;
    width: 100%;
  }
`;

export const logoLink = css.resolve`
  a {
    display: block;
  }
`;
