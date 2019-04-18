import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, fonts, mq } from '../../../tokens';

export default css`
  footer {
    background-color: rgb(76, 76, 76);
    color: white;
    display: flex;
    font-family: ${fonts.superla.family};
    justify-content: center;
    margin-bottom: 6rem;
    margin-top: 8rem;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  .title {
    font-size: 1rem;
    letter-spacing: 0.05rem;
    margin-top: 0;
    text-align: center;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 1.25rem;
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    margin: 2.5rem 5rem 0 5rem;
    padding-left: 0;
  }

  li + li {
    margin-left: 2rem;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: ${colors.brand};
  }
`;

export const shareIcon = css.resolve`
  svg {
    height: 3rem;
    width: 3rem;
  }
`;
