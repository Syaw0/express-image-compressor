import { styled } from '../@stitches.config';

export default styled('div', {
  display: 'flex',
  width: '100%',
  variants: {
    type: {
      searchInput: {
        border: '1px solid $onBg500',
        borderRadius: '16px',
        backgroundColor: '$onBg100',
        headline6: '500',
        color: '$onBg',
        boxShadow: '$1dp',
        jfs_ac: '',
        cursor: 'pointer',
        width: 'fit-content',
        position: 'relative',
        '& svg': {
          color: '$onBg600',
          margin: '$1',
          position: 'absolute',
          right: '0',
        },
        '& div': {
          position: 'absolute',
          backgroundColor: '$error',
          color: '$onError',
          borderRadius: '16px',
          padding: '0 $1',
          bottom: '-20px',
          width: 'fit-content',

        },
      },
    },

    dir: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      end: {
        alignItems: 'flex-end',
      },
      center: {
        alignItems: 'center',
      },
      between: {
        alignItems: 'space-between',
      },
      around: {
        alignItems: 'space-around',
      },
    },
    position: {
      relative: {
        position: 'relative',
      },
      absolute: {
        position: 'absolute',
      },
      fixed: {
        position: 'fixed',
      },
    },
    overflow: {
      hidden: {
        overflow: 'hidden',
      },
      scrollX: {
        overflowX: 'scroll',
      },
      scrollY: {
        overflowY: 'scroll',
      },

    },
    cursor: {
      click: {
        cursor: 'pointer',
      },
    },
  },

});
