import css from 'styled-jsx/css';

export default css`
  :global(.slick-slider) {
    user-select: none;
    touch-action: pan-y;
  }

  :global(.slick-list) {
    display: block;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: relative;
    transform: translateZ(0);
  }

  :global(.slick-track) {
    display: block;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 0;
  }

  :global(.slick-track::after),
  :global(.slick-track::before) {
    display: table;
    content: '';
  }

  :global(.slick-slide) {
    float: left;
    height: 100%;
    min-height: 1px;
  }
`;
