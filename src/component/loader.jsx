import React from 'react';
import { rotation } from '../styles/keyframes';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function Loader() {
  return (
    <Flex
      justify="center"
      align="center"
      dir="column"
      css={{
        '& p': {
          color: '$bg500', subhead1: '500',
        },
        margin: '$6',
      }}
    >
      <Flex css={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        display: 'inline-block',
        borderTop: '3px solid #FFF',
        borderRight: '3px solid transparent',
        boxSizing: 'border-box',
        animation: `${rotation} 1s  linear infinite`,
        margin: '$2 0',
      }}
      />
      <Text>
        compressing your images...
      </Text>
    </Flex>
  );
}

export default Loader;
