import css from 'styled-jsx/css';

import { colors, fonts } from '../../../tokens';

export default css`
  header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 100vh;
  }

  .logo {
    background-color: ${colors.brand};
  }

  .logo,
  .quote {
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    padding: 0 5rem;
    width: 50%;
  }

  blockquote {
    color: ${colors.brand};
    font-family: ${fonts.lapture.family};
    font-size: 2.875rem;
    font-style: italic;
    font-weight: ${fonts.lapture.weight.bold};
    line-height: 1.1;
    margin: 0;
    text-align: center;
  }
`;
