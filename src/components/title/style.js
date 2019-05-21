import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../tokens';

export default css`
  .container {
    background-color: ${colors.blue};
    color: white;
    padding: 5rem 1.5rem;
  }

  @media ${mq.tablet} {
    .container {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }
  }

  h1 {
    font-family: ${fonts.superla.family};
    font-size: 2.75rem;
    font-weight: ${fonts.superla.weight.extraBold};
    letter-spacing: 0.05rem;
    margin-bottom: 0;
    margin-top: 0;
    text-align: center;
    word-wrap: anywhere;
  }

  @media ${mq.tablet} {
    h1 {
      font-size: 3.75rem;
    }
  }

  small {
    display: block;
    font-size: 1rem;
    font-weight: ${fonts.superla.weight.regular};
  }

  @media ${mq.tablet} {
    small {
      font-size: 1.5rem;
    }
  }
`;
