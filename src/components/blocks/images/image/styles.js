import css from 'styled-jsx/css';

import { fonts } from '../../../../tokens';

export default css`
  figure {
    display: table;
    margin: 0 auto;
    max-height: 60vh;
  }

  figure.is-fullscreen {
    height: 100vh;
    max-height: 0;
    position: relative;
    width: 100%;
  }

  img {
    max-height: 100%;
    width: auto;
  }

  .is-fullscreen img {
    height: auto;
    width: 100%;
  }

  figcaption {
    caption-side: bottom;
    display: table-caption;
    font-family: ${fonts.superla.family};
    font-size: 1.125rem;
    font-weight: ${fonts.superla.weight.regular};
    line-height: 1.33;
    margin-top: 2rem;
    max-width: 30rem;
  }

  .is-fullscreen figcaption {
    bottom: 2.5rem;
    color: white;
    left: 2.5rem;
    max-width: 15rem;
    position: absolute;
    text-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
  }
`;
