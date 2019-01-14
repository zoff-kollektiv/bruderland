import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  li {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .title {
    border-bottom: 2px solid transparent;
    font-family: ${fonts.superla.family};
    font-size: 1.75rem;
    font-style: normal;
    font-weight: ${fonts.superla.weight.extraBold};
    letter-spacing: 0.05rem;
  }
`;
