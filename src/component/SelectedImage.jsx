/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import mainStore from '../store/mainStore';
import Flex from '../styles/styledComponents/flex';
import makeReadableSizes from '../utils/makeReadableSizes';
import { getImage } from '../utils/sendImgToServer';
import ImageBox from './imageBox';

function SelectedImage({ type }) {
  const storeFiles = mainStore((state) => state.files);
  const deleteFile = mainStore((state) => state.deleteFile);

  const rmHandler = (e) => {
    const deletionFile = e.currentTarget.parentNode.id;
    deleteFile(deletionFile);
  };

  const downloadHandler = (e) => {
    const imgId = e.target.parentNode.id;
    const dirId = mainStore.getState().dirUniqId;
    const result = getImage(dirId, imgId);
    if (result) {
      console.log('successfully');
    } else {
      console.log('failed');
    }
  };

  return (
    <Flex dir="column">

      {Object.keys(storeFiles).map((id) => {
        const fileObj = storeFiles[id];
        return (
          <ImageBox
            key={id}
            file={storeFiles[id].file}
            type={type}
            afSize={makeReadableSizes(fileObj.size)}
            preSize={makeReadableSizes(fileObj.file.size)}
            src={fileObj.base64}
            uId={id}
            rmHandler={type === 'download' ? downloadHandler : rmHandler}
          />
        );
      })}

    </Flex>
  );
}

export default SelectedImage;
