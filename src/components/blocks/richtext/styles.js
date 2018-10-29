import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  .richtext {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 400px;
  }

  :global(.richtext p) {
    font-family: ${fonts.superla.family};
    font-size: 1.25rem;
    font-weight: ${fonts.superla.weight.regular};
    line-height: 1.4;
    margin-left: 4rem;
  }
`;
