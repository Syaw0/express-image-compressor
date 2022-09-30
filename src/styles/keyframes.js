/* eslint-disable import/prefer-default-export */
import { keyframes } from './@stitches.config';

const fadeInToBottom = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-500px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const fadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0)',
  },
  '100%': {
    opacity: 1,
    transform: 'scale(1)',
  },
});

const fadeOut = keyframes({
  '0%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '100%': {
    opacity: 0,
    transform: 'scale(0)',
  },
});

const fadeOutToTop = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-500px)',
  },
});

const loaderAnimation = keyframes({
  '0%': {},
  '100%': { transform: 'scaleY(1)' },
  '50%': { transform: 'scaleY(2)' },
});

export {
  fadeInToBottom, fadeOutToTop, loaderAnimation, fadeIn, fadeOut,
};
