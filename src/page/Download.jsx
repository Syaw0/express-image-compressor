import React from 'react';
import SelectedImage from '../component/SelectedImage';
import mainStore from '../store/mainStore';
import { getAllImages } from '../utils/sendImgToServer';

function Download() {
  const handleButton = () => {
    const dirId = mainStore.getState().dirUniqId;
    const result = getAllImages(dirId);
    if (result) {
      console.log('im happy');
    } else {
      console.log('im not happy');
    }
  };

  return (
    <>
      <button type="button" onClick={handleButton}>download all</button>
      <SelectedImage type="download" />
    </>
  );
}

export default Download;
