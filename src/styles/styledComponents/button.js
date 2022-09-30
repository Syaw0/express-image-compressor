import { styled } from '../@stitches.config';

const Button = styled('button', {
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&:focus': {
    outline: 'none',
  },
  '&:hover': {
  },
  headline6: '500',
  color: '$onBg700',
  '& svg': {
    marginLeft: '8px',
  },
  '&:disabled': {
    backgroundColor: 'rgba(50,50,50,0.2)',
    cursor: 'wait',
    color: 'rgba(50,50,50,0.5)',
    '& svg': {
      fill: 'rgba(50,50,50,0.5)',
    },
    '&:hover': {
      color: 'rgba(50,50,50,0.5)',
      '& svg': {
        fill: 'rgba(50,50,50,0.5)',
      },
    },
  },
  variants: {
    type: {
      shadow: {
        '&:hover': {
          color: '$onBg',
        },
      },
      outline: {
        '& svg': {
          fill: '$primary',
        },
        borderRadius: '32px',
        color: '$primary',
        border: '1px solid $primary',
        '&:hover': {
          color: '$onPrimary',
          backgroundColor: '$primary',
          '& svg': {
            fill: '$onPrimary',
          },
        },
      },
      primary: {
        backgroundColor: '$primary',
        '& svg': {
          fill: '$onPrimary',
        },
        borderRadius: '32px',
        color: '$onPrimary',
        border: '1px solid $onPrimary',
        '&:hover': {
          color: '$primary',
          backgroundColor: '$primary200',
          // border:"1px solid $primary",
          '& svg': {
            fill: '$primary',
          },
        },
      },
    },
    floatInfo: {
      futureFeature: {
        position: 'relative',
        '&:hover': {
          '&::after': {
            display: 'flex',
          },
        },
        '&::after': {
          content: 'future feature! :)',
          // borderBottom:"1px solid $primary",
          subhead1: '600',
          position: 'absolute',
          bottom: '-40px',
          width: '200px',
          display: 'none',
        },
      },
    },
  },

});

export default Button;
