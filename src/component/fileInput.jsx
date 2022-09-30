/* eslint-disable no-await-in-loop */
import { nanoid } from 'nanoid';
import React from 'react';
import mainStore from '../store/mainStore';
import checkInsertLimitation from '../utils/checkInsertLimitation';
import transferFileTo64Base from '../utils/transferFileTo64Base';

function FileInput() {
  const insertFile = mainStore((state) => state.insertFile);
  const storeFiles = mainStore((state) => state.files);
  const insertLimit = mainStore((state) => state.insertLimit);

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
  return (
    <input
      type="file"
      name="imageInput"
      id="imageInput"
      accept=".jpg,.png,.jpeg,"
      multiple
      onChange={handleFileInput}
    />
  );
}
export default FileInput;
