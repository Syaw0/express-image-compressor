import { globalCss } from './@stitches.config';

const gCss = globalCss({
  '*': {
    padding: '0',
    margin: '0',
    boxSizing: 'border-box',
    transition: '$coAndBg',
  },
  '::selection': {
    backgroundColor: '$onBg100',
  },

  svg: {
    cursor: 'pointer',
  },

  '@import': 'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Yeseva+One&display=swap',

  '#root': {
  },
  '#wrapper': {
    minHeight: '100vh',
    backgroundColor: '$bg',
  },

});

export default gCss;
