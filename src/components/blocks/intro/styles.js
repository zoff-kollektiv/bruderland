import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  blockquote {
    font-family: ${fonts.lapture.family};
    font-size: 2.875rem;
    font-style: italic;
    font-weight: ${fonts.lapture.weight.bold};
    line-height: 1.1;
    margin: 0;
  }
`;
