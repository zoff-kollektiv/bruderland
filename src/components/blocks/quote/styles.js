import css from 'styled-jsx/css';

import { fonts, colors, mq } from '../../../tokens';

export default css`
  section {
    margin-bottom: 4rem;
    margin-top: 0;
  }

  @media ${mq.tablet} {
    section {
      margin-bottom: 5rem;
      margin-top: 3rem;
    }
  }

  blockquote {
    margin: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: center;
    width: 100%;
  }

  @media ${mq.tablet} {
    blockquote {
      margin-left: 3rem;
      max-width: 45rem;
      padding-left: 6.5rem;
      padding-right: 0.5rem;
      text-align: left;
    }
  }

  .quotation-mark {
    display: block;
    font-size: 6rem;
    line-height: 1;
  }

  @media ${mq.tablet} {
    .quotation-mark {
      font-size: 9.375rem;
      left: -6.5rem;
      line-height: 0;
      position: absolute;
      top: 1.25rem;
    }
  }

  .text {
    color: ${colors.brand};
    font-family: ${fonts.lapture.family};
    font-size: 2rem;
    font-style: italic;
    line-height: 1.08;
    margin-bottom: 0;
    margin-top: 0;
    position: relative;
  }

  @media ${mq.tablet} {
    .text {
      font-size: 2.4rem;
    }
  }

  @media ${mq.desktop} {
    .text {
      font-size: 2.875rem;
    }
  }

  .richtext {
    margin-top: 4rem;
  }
`;
