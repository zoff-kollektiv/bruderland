import css from 'styled-jsx/css';

import { fonts, colors } from '../../../tokens';

export default css`
  section {
    padding-bottom: 5rem;
    padding-top: 7rem;
  }

  blockquote {
    margin: 0 0 5rem 3rem;
    padding-left: 6.5rem;
  }

  cite {
    display: block;
    font-family: ${fonts.superla.family};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: ${fonts.superla.weight.regular};
    margin-top: 5rem;
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
    font-size: 2.25rem;
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 0;
    margin-top: 0;
    position: relative;
  }
`;
