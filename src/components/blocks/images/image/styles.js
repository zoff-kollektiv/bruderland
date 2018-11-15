import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../../../tokens';

export default css`
  figure {
    display: table;
    margin: 0 auto;
    max-height: 60vh;
    max-width: 750px;
  }

  figure.is-fullscreen {
    height: 100vh;
    max-height: 0;
    position: relative;
    width: 100%;
  }

  img {
    align-self: flex-start;
    max-height: 100%;
    max-width: 100%;
    width: auto;
  }

  .is-fullscreen img {
    height: auto;
    width: 100%;
  }

  figcaption {
    caption-side: bottom;
    color: ${colors.grey};
    display: table-caption;
    font-family: ${fonts.superla.family};
    font-size: 1rem;
    font-weight: ${fonts.superla.weight.regular};
    line-height: 1.33;
    margin-top: 0;
    max-width: 30rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: center;
  }

  @media ${mq.tablet} {
    figcaption {
      font-size: 1.125rem;
      margin-top: 2rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      text-align: left;
    }
  }

  @media ${mq.tablet} {
    .is-fullscreen figcaption {
      bottom: 2.5rem;
      color: white;
      left: 2.5rem;
      max-width: 15rem;
      position: absolute;
      text-align: left;
      text-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
    }
  }
`;
