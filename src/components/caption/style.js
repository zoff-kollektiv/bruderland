import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../tokens';

export default css`
  figcaption {
    color: ${colors.grey};
    font-family: ${fonts.superla.family};
    font-size: 0.9rem;
    font-weight: ${fonts.superla.weight.regular};
    line-height: 1.33;
    margin-top: 0;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.5rem;
    text-align: left;
    width: 100%;
  }

  @media ${mq.tablet} {
    figcaption {
      caption-side: bottom;
      display: table-caption;
      font-size: 1rem;
      max-width: 30rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  figcaption.is-portrait {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: auto;
  }

  :global(figcaption a) {
    color: currentColor;
  }
`;
