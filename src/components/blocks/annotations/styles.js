import css from 'styled-jsx/css';

import { colors, fonts } from '../../../tokens';

export default css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: ${fonts.superla.family};
    justify-content: center;
  }

  .title {
    font-size: 1.31rem;
  }

  .text {
    color: ${colors.grey};
    font-size: 1.05rem;
  }
`;
