import css from 'styled-jsx/css';

import { mq } from '../../tokens';

export default css`
  div {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    div {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      width: 700px;
    }
  }
`;
