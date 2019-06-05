import css from 'styled-jsx/css';

import { colors, fonts, mq } from '../../../tokens';

export default css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: ${fonts.superla.family};
    font-size: 1.25rem;
    font-weight: ${fonts.superla.weight.regular};
    justify-content: center;
    line-height: 1.4;
  }

  .richtext--is-bold {
    font-weight: 700;
  }

  :global(.richtext a) {
    color: currentColor;
    text-decoration: underline;
  }

  :global(.richtext a:hover),
  :global(.richtext a:focus) {
    color: ${colors.brand};
  }

  :global(.richtext a.footnote) {
    color: ${colors.blue};
    text-decoration: none;
  }

  :global(.richtext h2),
  :global(.richtext h3) {
    line-height: 1.1;
    width: 100%;
  }

  @media ${mq.tablet} {
    :global(.richtext h2),
    :global(.richtext h3) {
      margin-left: -3.5rem;
    }
  }

  :global(.richtext h2) {
    font-family: ${fonts.lapture.family};
    font-size: 2rem;
    font-style: italic;
    font-weight: ${fonts.lapture.weight.bold};
    margin-bottom: 2rem;
    margin-top: 4.5rem;
  }

  @media ${mq.tablet} {
    :global(.richtext h2) {
      font-size: 2.875rem;
    }
  }

  :global(.richtext h3) {
    font-family: ${fonts.superla.family};
    font-size: 1.4rem;
    font-weight: ${fonts.superla.weight.extraBold};
    margin-bottom: 0rem;
    margin-top: 3.5rem;
  }

  @media ${mq.tablet} {
    :global(.richtext h3) {
      font-size: 1.8rem;
    }
  }
`;
