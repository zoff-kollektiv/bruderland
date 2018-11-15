import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors } from '../../tokens';

export default css`
  :global(.modal) {
    background-color: rgb(77, 77, 77);
    color: white;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 30;
  }

  .navigation-container {
    display: flex;
    padding: 1rem 1.5rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  .logo {
    align-self: flex-end;
    color: ${colors.lightGrey};
    margin-left: auto;
    opacity: 0;
    transition: opacity 200ms ease;
  }

  .navigation-container--intro-not-visible .logo {
    opacity: 1;
  }

  .navigation {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const iconStyles = css.resolve`
  svg {
    height: 2rem;
    width: 2rem;
  }
`;
