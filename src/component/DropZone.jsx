/* eslint-disable no-await-in-loop */
import { nanoid } from 'nanoid';
import React from 'react';
import mainStore from '../store/mainStore';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';
import checkInsertLimitation from '../utils/checkInsertLimitation';
import disableDefaultDropBehavior from '../utils/disableDefaultDropBehavior';
import supportedFiles from '../utils/supportedFiles';
import transferFileTo64Base from '../utils/transferFileTo64Base';

function DropZone() {
  disableDefaultDropBehavior();
  const insertFile = mainStore((state) => state.insertFile);
  const insertLimit = mainStore((state) => state.insertLimit);
  const storeFiles = mainStore((state) => state.files);
  const appState = mainStore((state) => state.appState);

  const handleDrags = (e) => {
    const target = e.currentTarget;
    target.style.backgroundColor = 'RGBA(47, 234, 168, 0.5)';
    target.ondragleave = () => {
      target.style.backgroundColor = 'RGBA(47, 234, 168, 0.3)';
    };
  };

  const handleDrops = async (e) => {
    e.currentTarget.style.backgroundColor = 'RGBA(47, 234, 168, 0.3)';
    const { files } = e.dataTransfer;
    const fileList = {};
    const insertedIndex = files.length + Object.keys(storeFiles).length - insertLimit;

    for (let i = 0; i !== files.length; i += 1) {
      const limitValidationResult = checkInsertLimitation(files, i, insertedIndex);
      if (!limitValidationResult) {
        break;
      }
      const splittedName = files[i].name.split('.');
      if (splittedName[splittedName.length - 1] in supportedFiles) {
        fileList[nanoid()] = {
          file: files[i],
          base64: await transferFileTo64Base(files[i]),
        };
      } else {
        console.log('not support this file');
      }
      insertFile(fileList);
    }
  };

  let additionalState = {};
  if (appState === 'download' || appState === 'sendToServer') {
    additionalState = {
      backgroundColor: 'rgba(208, 208, 208,0.5)',
      opacity: '0.2',
      cursor: 'no-drop',
      '& p': {
        cursor: 'no-drop',
      },
    };
  }

  return (
    <Flex
      justify="center"
      align="center"
      css={{
        width: '100%',
        height: '8rem',
        '@bp4': {
          height: '5rem',
        },
        borderRadius: '10px',
        margin: '$2 0',
        headline4: '500',
        color: '$primary',
        backgroundColor: 'RGBA(47, 234, 168, 0.1)',
        opacity: '1',
        cursor: 'drop',
        border: '3px dashed RGBA(47, 234, 168, 0.8)',
        ...additionalState,
      }}
      onDragOver={handleDrags}
      onDrop={handleDrops}
    >
      <Text css={{
        color: '#A9FFE2',
        textAlign: 'center',
        '@bp4': {
          headline6: '500',
        },
      }}
      >
        Drop Here Your File Or Files Here
      </Text>
    </Flex>
  );
}

export default DropZone;
