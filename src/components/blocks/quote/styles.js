import css from 'styled-jsx/css';

import { fonts, colors } from '../../../tokens';

export default css`
  section {
    min-height: 100vh;
    padding-bottom: 5rem;
    padding-top: 7rem;
  }

  blockquote {
    margin: 0 0 0 3rem;
    max-width: 45rem;
    padding-left: 6.5rem;
  }

  .quotation-mark {
    font-size: 9.375rem;
    left: -6.5rem;
    line-height: 0;
    position: absolute;
    top: 1.25rem;
  }

  .text {
    color: ${colors.brand};
    font-family: ${fonts.lapture.family};
    font-size: 2.875rem;
    font-style: italic;
    line-height: 1.08;
    margin-bottom: 0;
    margin-top: 0;
    position: relative;
  }

  .richtext {
    margin-top: 4rem;
  }
`;
