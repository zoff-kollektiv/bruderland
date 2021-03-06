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
    padding: 3.5rem 0;
    width: 100%;
  }

  @media ${mq.tablet} {
    section {
      min-height: 100vh;
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
    font-size: 2rem;
    font-style: italic;
    font-weight: ${fonts.lapture.weight.bold};
    line-height: 1.1;
    margin: 0;
    text-align: center;
    padding: 0;
    width: 100%;
    word-break: break-word;
  }

  @media ${mq.tablet} {
    blockquote {
      font-size: 3rem;
      width: auto;
    }
  }

  @media ${mq.desktop} {
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
    margin-top: 1.5rem;
  }

  @media ${mq.tablet} {
    blockquote {
      margin-top: 3rem;
    }
  }
`;
