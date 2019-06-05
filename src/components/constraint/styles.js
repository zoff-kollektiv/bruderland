import css from 'styled-jsx/css';

import { mq } from '../../tokens';

export default css`
  .constraint {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    width: 100%;
  }

  @media ${mq.tablet} {
    .constraint {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      width: 570px;
    }
  }

  @media ${mq.tablet} {
    .constraint--wide {
      width: 760px;
    }
  }
`;
