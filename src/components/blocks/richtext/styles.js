import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../../tokens';

export default css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  :global(.richtext p) {
    font-family: ${fonts.superla.family};
    font-size: 1.25rem;
    font-weight: ${fonts.superla.weight.regular};
    line-height: 1.4;
  }

  :global(.richtext a) {
    color: currentColor;
    text-decoration: underline;
  }

  :global(.richtext a.footnote) {
    color: ${colors.blue};
    text-decoration: none;
  }

  :global(.richtext h2) {
    font-family: ${fonts.lapture.family};
    font-size: 2rem;
    font-style: italic;
    font-weight: ${fonts.lapture.weight.bold};
    line-height: 1.1;
    margin-bottom: 2rem;
    margin-top: 4.5rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    :global(.richtext h2) {
      font-size: 2.875rem;
      margin-left: -3rem;
    }
  }
`;
