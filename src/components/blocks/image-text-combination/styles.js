import css from 'styled-jsx/css';

import { fonts, mq } from '../../../tokens';

export default css`
  figure {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1.5rem 3.5rem;
  }

  @media ${mq.tablet} {
    figure {
      flex-direction: row;
      flex-wrap: nowrap;
      min-height: 100vh;
    }
  }

  img,
  .content {
    flex: 1 0 auto;
    object-fit: contain;
  }

  img {
    width: 100%;
  }

  @media ${mq.tablet} {
    img {
      margin-right: 1.5rem;
      width: 75%;
    }
  }

  .content {
    width: 100%;
  }

  @media ${mq.tablet} {
    .content {
      width: 25%;
    }
  }

  .title {
    font-family: ${fonts.lapture.family};
    font-size: 1.75rem;
    margin-bottom: 4.5rem;
  }

  .text {
    font-family: ${fonts.superla.family};
    font-size: 1.25rem;
  }
`;
