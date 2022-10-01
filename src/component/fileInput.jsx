/* eslint-disable no-await-in-loop */
import { nanoid } from 'nanoid';
import React from 'react';
import mainStore from '../store/mainStore';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';
import checkInsertLimitation from '../utils/checkInsertLimitation';
import transferFileTo64Base from '../utils/transferFileTo64Base';

function FileInput() {
  const insertFile = mainStore((state) => state.insertFile);
  const storeFiles = mainStore((state) => state.files);
  const insertLimit = mainStore((state) => state.insertLimit);
  const appState = mainStore((state) => state.appState);

  const handleFileInput = async (e) => {
    const fileList = {};
    const { files } = e.target;
    const insertedIndex = files.length + Object.keys(storeFiles).length - insertLimit;

    for (let i = 0; i !== files.length; i += 1) {
      const limitValidationResult = checkInsertLimitation(files, i, insertedIndex);
      if (!limitValidationResult) {
        break;
      }
      fileList[nanoid()] = {
        file: files[i],
        base64: await transferFileTo64Base(files[i]),
      };
    }
    insertFile(fileList);
  };

  let additionalState = {};
  if (appState === 'download' || appState === 'sendToServer') {
    additionalState = {
      backgroundColor: 'rgba(208, 208, 208,0.5)',
      opacity: '0.2',
      cursor: 'no-drop',
      '& p': {
        cursor: 'no-drop',
        color: '$bg',
        height: '100%',
        position: 'relative',
        zIndex: '5',
      },
      '& input': {
        cursor: 'no-drop',
        position: 'absolute',
        zIndex: '1',
        visibility: 'hidden',
        height: '100%',
      },
      '&>*': {
        cursor: 'no-drop',
      },

    };
  }

  return (
    <Flex
      justify="center"
      align="center"
      css={{
        position: 'relative',
        border: '1px solid $bg600',
        backgroundColor: '$bg200',
        padding: '$2',
        width: '100%',
        borderRadius: '10px',
        '&:hover': {
          backgroundColor: '$bg400',
        },
        '& input': {
          width: '100%',
          cursor: 'pointer',
          opacity: '0',
          position: 'absolute',
          zIndex: '2',
          height: '100%',
        },
        '& p': {
          position: 'relative',
          zIndex: '1',
          color: '$bg',
          width: '100%',
          textAlign: 'center',
          headline6: '500',

        },
        ...additionalState,
      }}
    >
      <input
        type="file"
        name="imageInput"
        id="imageInput"
        accept=".jpg,.png,.jpeg,"
        multiple
        disabled={(appState === 'sendToServer' || appState === 'download')}
        onChange={handleFileInput}
      />
      <Text>
        Or Choose your file from Here
      </Text>
    </Flex>
  );
}
export default FileInput;
