import { styled } from '../@stitches.config';

const Text = styled('p', {
  fontFamily: '$josef',
  color: '$onBg',
  cursor: 'default',
  variants: {
    cursor: {
      click: {
        cursor: 'pointer',
      },
    },
    type: {
      logo: {
        headline1: '500',
        fontFamily: '$yeseva',
        width: '20%',
        textAlign: 'center',
        color: '$onBg',
      },
      bgColorHeadSecondary: {
        width: '100%',
        backgroundColor: '$secondary',
        color: '$onSecondary',
        padding: '4px 10px',
        headline5: '600',
        borderRadius: '32px',
        marginBottom: '$2',
        '@bp4': {
          headline6: '600',

        },
      },
      bgColorHeadPrimary: {
        width: '100%',
        backgroundColor: '$primary',
        color: '$onPrimary',
        padding: '4px 10px',
        headline5: '600',
        borderRadius: '32px',
        marginBottom: '$2',
        '@bp4': {
          headline6: '600',

        },
      },
    },
  },
});

export default Text;
