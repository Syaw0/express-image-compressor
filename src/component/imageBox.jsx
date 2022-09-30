/* eslint-disable react/prop-types */
import React from 'react';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function ImageBox({
  src, uId, rmHandler, size, type,
}) {
  return (
    <Flex
      key={uId}
      id={uId}
      css={{
        '& img': {
          width: '20%',
          height: 'auto',
        },
        marginBottom: '$2',
        border: '1px solid black',

      }}
    >

      <img src={src} alt="img" />
      <button type="button" onClick={rmHandler}>{type === 'download' ? 'Download' : 'Delete'}</button>
      {size !== null && (
      <Text>
        size:
        {' '}
        {size}
      </Text>
      )}
    </Flex>
  );
}

export default ImageBox;
