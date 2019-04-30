import css from 'styled-jsx/css';

import { colors, fonts } from '../../tokens';

export default css`
  .container {
    background-color: ${colors.blue};
    color: white;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  h1 {
    font-family: ${fonts.superla.family};
    font-weight: ${fonts.superla.weight.regular};
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
  }
`;
