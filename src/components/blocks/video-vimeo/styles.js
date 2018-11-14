import css from 'styled-jsx/css';

import { fonts, mq } from '../../../tokens';

export default css`
  figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  .video-container {
    height: 0;
    padding-bottom: 56.25%;
    padding-top: 25px;
    position: relative;
  }

  .video {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  figcaption {
    font-family: ${fonts.superla.family};
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5rem;
  }

  @media ${mq.tablet} {
    figcaption {
      font-size: 1.25rem;
    }
  }
`;
