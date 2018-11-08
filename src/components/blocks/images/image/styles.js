import css from 'styled-jsx/css';

import { fonts } from '../../../../tokens';

export default css`
  figure {
    display: table;
    margin: 0 auto;
    max-height: 60vh;
  }

  img {
    max-height: 100%;
    width: auto;
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
`;
