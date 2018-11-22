import css from 'styled-jsx/css';

import { fonts } from '../../../tokens';

export default css`
  .navigation {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    list-style: none;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 0;
  }

  li + li {
    margin-top: 1.5rem;
  }

  :global(.navigation .item) {
    align-items: center;
    color: currentColor;
    display: flex;
    flex-wrap: wrap;
    text-decoration: none;
  }

  :global(.navigation .item[aria-current] .topic) {
    border-color: currentColor;
  }

  .episode {
    font-family: ${fonts.superla.family};
    font-size: 1.56rem;
    font-weight: ${fonts.superla.weight.regular};
    padding-right: 3rem;
    text-align: right;
    width: 50%;
  }

  .topic {
    border-bottom: 2px solid transparent;
    font-family: ${fonts.superla.family};
    font-size: 1.75rem;
    font-style: normal;
    font-weight: ${fonts.superla.weight.extraBold};
  }

  .intro {
    font-family: ${fonts.superla.family};
    font-size: 1.125rem;
    font-weight: ${fonts.superla.weight.regular};
    margin-bottom: 0;
    margin-left: 50%;
    margin-top: 1rem;
    max-width: 450px;
    width: 100%;
  }
`;
