import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts, colors, mq } from '../../../tokens';

export default css`
  li {
    flex: 0 0 auto;
    width: 100%;
  }

  @media ${mq.tablet} {
    li {
      width: 50%;
    }
  }

  .topic {
    border-bottom: 2px solid transparent;
    font-family: ${fonts.superla.family};
    font-size: 1.5rem;
    font-style: normal;
    font-weight: ${fonts.superla.weight.extraBold};
    letter-spacing: 0.05rem;
  }

  .intro {
    font-family: ${fonts.superla.family};
    font-size: 0.9rem;
    font-weight: ${fonts.superla.weight.regular};
    margin-bottom: 0;
    margin-top: 0.5rem;
    max-width: 450px;
    width: 100%;
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

  @media ${mq.tablet} {
    padding: 1rem 3rem;
  }

  a:hover,
  a:focus {
    background-color: ${colors.blue};
  }
`;
