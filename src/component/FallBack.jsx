import React from 'react';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function FallBack() {
  return (
    <Flex
      dir="column"
      justify="center"
      align="center"
      css={{
        padding: '0',
        margin: '0',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Text css={{
        color: '$error',
        headline3: '900',
        margin: '$2',
      }}
      >
        Internal Error  😵️ ⛔️
      </Text>
      <Text css={{
        color: '$bg700',
        headline6: '500',
        textAlign: 'center',
      }}
      >
        if you are seen this error thats mean
        {' '}
        <br />
        app internally has bug 🐛️
        <br />
        {' '}
        if its not ok with refresh a page
        {' '}
        <br />
        just wait to developers work on the errors 😇️.
      </Text>
    </Flex>
  );
}

export default FallBack;
