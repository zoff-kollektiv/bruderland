import css from 'styled-jsx/css';

export default css`
  div {
    height: 0;
    padding-top: 25px;
    position: relative;
  }

  .ratio-4-3 {
    padding-bottom: 75%;
  }

  .ratio-16-9 {
    padding-bottom: 56.25%;
  }

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
