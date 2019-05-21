import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { fonts, colors, mq } from '../../../tokens';

export default css`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    list-style: none;
    margin-bottom: 0;
    margin-top: 1rem;
    padding-left: 0;
  }

  @media ${mq.tablet} {
    ul {
      margin-top: 1.5rem;
    }
  }

  .list-item {
    flex: 0 0 auto;
    padding-left: 1.25rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .list-item {
      width: 40%;
    }
  }

  strong {
    font-family: ${fonts.superla.family};
    font-size: 1rem;
    font-weight: ${fonts.superla.weight.extraBold};
    letter-spacing: 0.05rem;
  }

  @media ${mq.tablet} {
    strong {
      font-size: 1.25rem;
    }
  }

  @media ${mq.desktop} {
    strong {
      font-size: 1.5rem;
    }
  }

  a {
    color: currentColor;
  }

  a:hover,
  a:focus {
    color: ${colors.blue};
  }
`;

export const iconStyle = css.resolve`
  svg {
    height: 1.25rem;
    margin-right: 1.5rem;
    width: 1.25rem;
  }

  @media ${mq.tablet} {
    svg {
      height: 1.5rem;
      margin-right: 1.5rem;
      width: 1.5rem;
    }
  }
`;
