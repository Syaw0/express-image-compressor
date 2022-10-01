/* eslint-disable no-dupe-keys */
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
    background: 'hsla(197, 14%, 57%, 1)',
    background: 'linear-gradient(90deg, #2C3E50 0%, #000000 100%)',
    background: '-moz-linear-gradient(90deg, #2C3E50 0%, #000000 100%)',
    background: ' -webkit-linear-gradient(90deg, #2C3E50 0%, #000000 100%)',
    minHeight: '100vh',
  },
  '#header': {
    background: 'hsla(265, 53%, 29%, 1)',
    background: 'linear-gradient(45deg, #2feaa8 0%, #028cf3 100%)',
    background: '-moz-linear-gradient(45deg,  #2feaa8 0%, #028cf3 100%)',
    background: '-webkit-linear-gradient(45deg,  #2feaa8 0%, #028cf3 100%)',
    backgroundClip: 'text',
    textFillColor: 'transparent',
    '-webkit-background-clip': 'text',
    '-moz-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-moz-text-fill-color': 'transparent',
  },
});

export default gCss;
