import { styled } from '../@stitches.config';

export default styled('input', {

  variants: {
    whichType: {
      search: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        padding: '$1 $6 $1 $2',
        headline6: '600',
        color: '$onBg800',
        fontFamily: '$josef',
        '&:focus': {
          outline: 'none',
        },
        '&::placeholder': {
          headline6_i: '600',
          color: '$onBg700',
        },

      },
      text: {
        backgroundColor: 'transparent',
        border: '1px solid $primary500',
        borderRadius: '16px',
        padding: '$1 $6 $1 $2',
        headline6: '600',
        color: '$onBg',
        fontFamily: '$josef',
        '&:focus': {
          outline: '2px solid $primary',
          backgroundColor: '$primary100',
          border: '1px solid $primary500',
          color: '$primary',
        },
        '&::placeholder': {
          headline6_i: '600',
          color: '$onBg700',
        },
      },
      select: {
        backgroundColor: 'transparent',
        border: '1px solid $primary500',
        borderRadius: '16px',
        padding: '$1 $6 $1 $2',
        headline6: '600',
        color: '$onBg',
        fontFamily: '$josef',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:focus': {
          outline: '2px solid $primary',
          backgroundColor: '$primary100',
          color: '$primary',
        },
        '&::placeholder': {
          headline6_i: '600',
          color: '$onBg700',
        },
      },
      file: {
        backgroundColor: 'transparent',
        border: '1px solid $primary500',
        borderRadius: '16px',
        padding: '$1 $6 $1 $2',
        headline6: '600',
        color: '$onBg',
        fontFamily: '$josef',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:focus': {
          outline: '2px solid $primary',
          backgroundColor: '$primary100',
          color: '$primary',
        },
        '&::placeholder': {
          headline6_i: '600',
          color: '$onBg700',
        },
      },
    },
  },
});
