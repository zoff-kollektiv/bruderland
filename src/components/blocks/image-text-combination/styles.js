import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  figure {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0;
    min-height: 100vh;
    padding: 1.5rem 3.5rem;
  }

  img,
  .content {
    flex: 1 0 auto;
    object-fit: contain;
  }

  img {
    margin-right: 1.5rem;
    width: 75%;
  }

  .content {
    width: 25%;
  }

  .title {
    font-family: ${fonts.lapture.family};
    font-size: 1.75rem;
    margin-bottom: 4.5rem;
  }

  .text {
    font-family: ${fonts.superla.family};
    font-size: 1.25rem;
  }
`;
