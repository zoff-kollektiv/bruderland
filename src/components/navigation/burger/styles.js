import css from 'styled-jsx/css';

import { colors, fonts } from '../../../tokens';

export default css`
  a {
    align-items: center;
    color: ${colors.lightGrey};
    display: flex;
    font-family: ${fonts.superla.family};
    line-height: 1;
    text-decoration: none;
  }

  a:hover,
  .buger:focus {
    color: white;
  }

  a > svg {
    height: 1.25rem;
    margin-right: 0.5rem;
    width: 1.25rem;
  }
`;