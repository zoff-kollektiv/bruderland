import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../tokens';

export default css`
  figcaption {
    caption-side: bottom;
    color: ${colors.grey};
    display: table-caption;
    font-family: ${fonts.superla.family};
    font-size: 0.9rem;
    font-weight: ${fonts.superla.weight.regular};
    line-height: 1.33;
    margin-left: 1.5rem;
    margin-top: 0;
    max-width: 30rem;
    text-align: left;
    width: 100%;
  }

  @media ${mq.tablet} {
    figcaption {
      font-size: 1rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
`;
