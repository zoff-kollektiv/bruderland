import css from 'styled-jsx/css';

import { colors, fonts } from '../../../../tokens';

export default css`
  ul {
    border-top: 1px solid ${colors.grey};
    list-style: none;
    margin-top: 2.5rem;
    padding-left: 0;
    padding-top: 1.5rem;
  }

  .footnote {
    color: ${colors.grey};
    font-family: ${fonts.superla.family};
    font-size: 1rem;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    padding: 0.5rem;
  }

  .footnote + .footnote {
    margin-top: 0.5rem;
  }

  :global(.footnote p) {
    display: inline;
    margin-bottom: 0;
    margin-top: 0;
  }

  :global(.footnote a) {
    color: currentColor;
  }

  :target {
    background-color: rgb(255, 243, 210);
  }
`;
