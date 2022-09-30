/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import mainStore from '../store/mainStore';
import Flex from '../styles/styledComponents/flex';
import ImageBox from './imageBox';

function SelectedImage({ type }) {
  const storeFiles = mainStore((state) => state.files);
  const deleteFile = mainStore((state) => state.deleteFile);

  const rmHandler = (e) => {
    const deletionFile = e.target.parentNode.id;
    deleteFile(deletionFile);
  };

  const downloadHandler = (e) => {
    console.log('download', e.target.parentNode.id);
  };

  return (
    <Flex dir="column">

      {Object.keys(storeFiles).map((id) => {
        const fileObj = storeFiles[id];
        return (
          <ImageBox key={id} type={type} size={type === 'download' ? fileObj.size : null} src={fileObj.base64} uId={id} rmHandler={type === 'download' ? downloadHandler : rmHandler} />
        );
      })}

    </Flex>
  );
}

export default SelectedImage;
