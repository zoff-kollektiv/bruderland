import css from 'styled-jsx/css';

import { fonts, mq } from '../../../tokens';

export default css`
  figure {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1.5rem 0;
  }

  @media ${mq.tablet} {
    figure {
      flex-direction: row;
      flex-wrap: nowrap;
      margin-bottom: 4rem;
      margin-top: 2rem;
      padding-left: 3.5rem;
      padding-right: 3.5rem;
    }
  }

  .image-container,
  .content {
    flex: 1 0 auto;
    object-fit: contain;
  }

  .image-container {
    width: 100%;
  }

  @media ${mq.tablet} {
    .image-container {
      margin-right: 1rem;
      width: 60%;
    }
  }

  @media ${mq.desktop} {
    .image-container {
      margin-right: 1.5rem;
      width: 75%;
    }
  }

  img {
    height: auto;
    max-height: 90vh;
    object-fit: contain;
    width: 100%;
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
    font-size: 1.25rem;
    font-style: italic;
    font-weight: ${fonts.lapture.weight.bold};
    margin-bottom: 1.5rem;
    margin-top: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${mq.tablet} {
    .title {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }

  @media ${mq.desktop} {
    .title {
      margin-bottom: 4.5rem;
    }
  }

  .text {
    font-family: ${fonts.superla.family};
    font-size: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media ${mq.tablet} {
    .text {
      font-size: 1.25rem;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }
`;
