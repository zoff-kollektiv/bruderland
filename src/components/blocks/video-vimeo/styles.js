import css from 'styled-jsx/css';

import { fonts, mq } from '../../../tokens';

export default css`
  figure {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  .container {
    width: 800px;
  }

  figcaption {
    font-family: ${fonts.superla.family};
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5rem;
  }

  .progress {
    height: 5rem;
    position: relative;
    width: 5rem;
  }

  @media ${mq.tablet} {
    figcaption {
      font-size: 1.25rem;
    }
  }
`;
