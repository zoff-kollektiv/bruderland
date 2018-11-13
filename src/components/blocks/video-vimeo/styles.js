import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    font-size: 1.25rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5rem;
  }
`;
