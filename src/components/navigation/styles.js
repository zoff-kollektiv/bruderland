import css from 'styled-jsx/css';

import { colors } from '../../tokens';

export default css`
  :global(.modal) {
    background-color: rgb(77, 77, 77);
    color: white;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .navigation-container {
    display: flex;
    padding: 1rem 1.5rem;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .logo {
    align-self: flex-end;
    margin-left: auto;
  }

  :global(.navigation-container .logo svg) {
    height: 2.5rem;
    width: 2.5rem;
  }

  :global(.navigation-container .logo g#handshake) {
    fill: ${colors.lightGrey};
  }

  .navigation {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
