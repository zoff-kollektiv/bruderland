import css from 'styled-jsx/css';

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

  .navigation {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
