import React from 'react';
import DropZone from '../component/DropZone';
import FileInput from '../component/fileInput';
import SelectedImage from '../component/SelectedImage';
import mainStore from '../store/mainStore';
import Text from '../styles/styledComponents/text';
import sendImgToServer from '../utils/sendImgToServer';

function Home() {
  const storeFiles = mainStore((state) => state.files);

  const sendFiles = async () => {
    const result = await sendImgToServer();
    if (result.status) {
      const newList = { ...mainStore.getState().files };
      Object.keys(result.data.data).forEach((v) => {
        newList[v] = { ...newList[v], ...result.data.data[v] };
      });
      mainStore.setState((state) => ({
        ...state,
        currentComponent: 'download',
        files: { ...newList },
      }));
    }
  };
  return (

    <>
      <FileInput />
      <DropZone />
      <button type="button" onClick={sendFiles}>send</button>
      <Text>{`Already you have ${Object.keys(storeFiles).length} files`}</Text>

      <SelectedImage />
    </>
  );
}

export default Home;
