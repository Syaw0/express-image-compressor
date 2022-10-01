/* eslint-disable react/prop-types */
import React from 'react';
import IcoDelete from '../ico/icoDelete';
import IcoDownload from '../ico/icoDownload';
import Button from '../styles/styledComponents/button';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';

function ImageBox({
  src, uId, rmHandler, preSize, afSize, type, file,
}) {
  return (
    <Flex
      key={uId}
      id={uId}
      align="center"
      css={{
        '& img': {
          width: 'auto',
          height: '5rem',
          borderRadius: '10px',
        },
        '& button': {
          width: 'fit-content',
          height: 'fit-content',
          borderRadius: '50%',
          padding: '$1',
          '& svg': {
            fill: '$bg700',
          },
          '&:hover': {
            '& svg': {
              fill: '$bg',
            },
          },
        },
        marginBottom: '$2',
        backgroundColor: '$bg100',
        padding: '$1',
        borderRadius: '10px',
        '@bp4': {
          flexDirection: 'column',
        },
      }}
    >

      <Flex css={{
        '@bp4': {
          flexDirection: 'column',
          '& img': {
            height: '10rem',
            width: '100%',
          },
        },
      }}
      >
        <Flex css={{
          width: '60%',
          backgroundImage: `url(${src})`,
          bgCentering: '',
          height: '10rem',
          '@bp4': {
            width: '100%',
          },
        }}
        />
        {/* <img src={src} alt="img" /> */}
        <Flex
          dir="column"
          css={{
            '& p': {
              color: '$bg800',
              subhead1: '500',
              paddingLeft: '$1',
            },
            '& p:first-child': {
              subhead1: '900',
              margin: '$1 0 0 0 ',
            },
            '& p:last-child': {
              subhead1: '500',
              color: '$bg500',
              margin: '$1 0',
            },

          }}
        >
          <Text>
            {file.name}
          </Text>

          {type === 'download' && (
          <Text>
            befor compress :
            {' '}
            {preSize}
            {' '}
            <br />
            after compress :
            {' '}
            {afSize}
          </Text>
          )}

          {type !== 'download' && (
          <Text>
            image size :
            {' '}
            {preSize}
            {' '}
            <br />
          </Text>
          )}

        </Flex>
      </Flex>
      <Button
        title={type === 'download' ? 'Download this image isolated' : 'Delete this image from list'}
        onClick={rmHandler}
      >
        {type === 'download' ? <IcoDownload width={25} height={25} /> : <IcoDelete width={25} height={25} />}

      </Button>
    </Flex>
  );
}

export default ImageBox;
