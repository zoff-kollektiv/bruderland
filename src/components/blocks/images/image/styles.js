import css from 'styled-jsx/css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { colors, mq } from '../../../../tokens';

export default css`
  figure {
    display: table;
    margin: 0 auto;
    max-height: 60vh;
    max-width: 750px;
    position: relative;
  }

  figure.is-fullscreen {
    max-height: 100vh;
    max-width: none;
    position: relative;
    width: 100%;
  }

  img {
    align-self: flex-start;
    max-height: 60vh;
    max-width: 100%;
    width: auto;
  }

  .is-fullscreen img {
    height: auto;
    max-height: none;
    width: 100%;
  }

  @media ${mq.tablet} {
    .is-fullscreen :global(figcaption) {
      bottom: 2.5rem;
      color: white;
      left: 2.5rem;
      max-width: 15rem;
      position: absolute;
      text-align: left;
      text-shadow: 0 2px 3px rgba(0, 0, 0, 0.75);
    }
  }

  .fullscreen-toggle {
    background: transparent;
    border: none;
    color: white;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  .fullscreen-toggle:focus,
  .fullscreen-toggle:hover {
    color: ${colors.brand};
  }

  :global(.image-modal) {
    background-color: rgb(77, 77, 77);
    color: white;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 101;
  }

  @media ${mq.tablet} {
    :global(.image-modal) {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 100%;
      position: fixed;
    }
  }
`;

export const expandIcon = css.resolve`
  svg {
    height: 2rem;
    width: 2rem;
  }
`;
