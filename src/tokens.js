const SCREEN_SIZES = [
  ['phone', 500],
  ['tablet', 768],
  ['desktop', 1024],
  ['wide', 1300],
];

const colors = {
  brand: 'rgb(208, 2, 27)',
  lightGrey: 'rgb(205, 205, 205)',
  grey: 'rgb(102, 102, 102)',
  blue: 'rgb(8, 110, 147)',
};

const fonts = {
  lapture: {
    family: 'Lapture, Georgia, serif',
    weight: {
      bold: 700,
    },
  },

  superla: {
    family: 'Superla, -apple-system, sans-serif',
    weight: {
      regular: 400,
      extraBold: 900,
    },
  },
};

const mq = SCREEN_SIZES.reduce((acc, [name, size]) => {
  acc[name] = `only screen and (min-width: ${size}px)`;
  return acc;
}, {});

export { colors, fonts, mq };
