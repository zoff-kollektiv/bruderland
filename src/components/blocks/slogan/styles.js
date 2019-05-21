import css from 'styled-jsx/css';

import { fonts, colors, mq } from '../../../tokens';

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
    padding: 1.5rem;
  }

  @media ${mq.tablet} {
    section {
      min-height: 100vh;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  @media ${mq.desktop} {
    section {
      min-height: 0;
      padding-bottom: 12rem;
      padding-top: 12rem;
    }
  }

  @media ${mq.wide} {
    section {
      padding-bottom: 15rem;
      padding-top: 15rem;
    }
  }

  blockquote {
    font-family: ${fonts.lapture.family};
    font-size: 3rem;
    font-style: italic;
    font-weight: ${fonts.lapture.weight.bold};
    line-height: 1.1;
    margin: 0;
    text-align: center;
    padding: 0;
  }

  @media ${mq.tablet} {
    blockquote {
      font-size: 4.375rem;
    }
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
