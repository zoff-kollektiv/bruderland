import css from 'styled-jsx/css';

export default css`
  :global(body) {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    margin: 0;
    padding: 0;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  :global(:focus:not(:focus-visible)) {
    outline: none;
  }

  @font-face {
    font-display: swap;
    font-family: 'Lapture';
    font-style: italic;
    font-weight: 700;
    src: url('/fonts/lapture/lapture-bold-italic.woff2') format('woff2'),
      url('/fonts/lapture/lapture-bold-italic.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Superla';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/superla/superla-book.woff2') format('woff2'),
      url('/fonts/superla/superla-book.woff') format('woff');
  }

  @font-face {
    font-display: swap;
    font-family: 'Superla';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/superla/superla-extra-bold.woff2') format('woff2'),
      url('/fonts/superla/superla-extra-bold.woff') format('woff');
  }
`;
