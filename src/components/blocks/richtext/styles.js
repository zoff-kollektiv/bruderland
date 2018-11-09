import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  .richtext {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  :global(.richtext p) {
    font-family: ${fonts.superla.family};
    font-size: 1.25rem;
    font-weight: ${fonts.superla.weight.regular};
    line-height: 1.4;
  }

  :global(.richtext h2) {
    font-family: ${fonts.lapture.family};
    font-size: 2.875rem;
    font-style: italic;
    font-weight: ${fonts.lapture.weight.bold};
    line-height: 1.1;
    margin-bottom: 2rem;
    margin-left: -3rem;
    margin-top: 4.5rem;
    width: 100%;
  }
`;
