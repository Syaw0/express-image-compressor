/* eslint-disable no-await-in-loop */
import { nanoid } from 'nanoid';
import React from 'react';
import mainStore from '../store/mainStore';
import Flex from '../styles/styledComponents/flex';
import checkInsertLimitation from '../utils/checkInsertLimitation';
import disableDefaultDropBehavior from '../utils/disableDefaultDropBehavior';
import supportedFiles from '../utils/supportedFiles';
import transferFileTo64Base from '../utils/transferFileTo64Base';

function DropZone() {
  disableDefaultDropBehavior();
  const insertFile = mainStore((state) => state.insertFile);
  const insertLimit = mainStore((state) => state.insertLimit);
  const storeFiles = mainStore((state) => state.files);

  const handleDrags = () => {
    console.log('draged');
  };

  const handleDrops = async (e) => {
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

  return (
    <Flex
      justify="center"
      align="center"
      css={{
        width: '80%',
        height: '5rem',
        borderRadius: '10px',
        margin: '$2 0',
        headline4: '500',
        color: '$primary',
        backgroundColor: '$EasyDif300',
        border: '2px dashed $primary',
      }}
      onDragOver={handleDrags}
      onDrop={handleDrops}
    >
      Drop Here Your Files
    </Flex>
  );
}

export default DropZone;
