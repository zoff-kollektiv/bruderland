import css from 'styled-jsx/css';

import { mq } from '../../../tokens';

export default css`
  section {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  @media ${mq.tablet} {
    section {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
  }
`;
