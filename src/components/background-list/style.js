import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts, mq } from '../../tokens';

export default css`
  ul {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
  }

  li {
    flex: 1 0 auto;
    max-width: 100%;
    padding: 1rem 0;
    width: 100%;
  }

  @media ${mq.tablet} {
    li {
      padding: 1.5rem 2.5rem;
      width: 50%;
    }
  }
`;

export const linkStyles = css.resolve`
  a {
    color: currentColor;
    font-family: ${fonts.superla.family};
    font-size: 1.5rem;
    font-weight: ${fonts.superla.weight.extraBold};
    text-decoration: none;
  }

  @media ${mq.tablet} {
    a {
      font-size: 2.8rem;
    }
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;
