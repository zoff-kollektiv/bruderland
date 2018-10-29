import css from 'styled-jsx/css';

export default css`
  figure {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0;
  }

  img,
  .content {
    flex: 1 0 auto;
  }

  img {
    width: 75%;
  }

  .content {
    width: 25%;
  }
`;
