import css from 'styled-jsx/css';

import { fonts, colors } from '../../../tokens';

export default css`
  section {
    align-items: center;
    background-color: ${colors.blue};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 3rem;
    margin-top: 3rem;
    min-height: 100vh;
  }

  blockquote {
    font-family: ${fonts.lapture.family};
    font-size: 4.375rem;
    font-weight: ${fonts.lapture.weight.bold};
    line-height: 1.1;
    margin: 0;
    text-align: center;
    padding: 0;
  }

  cite {
    display: block;
    font-family: ${fonts.superla.family};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: ${fonts.superla.weight.regular};
    line-height: 1.6;
    margin-top: 3rem;
  }
`;
