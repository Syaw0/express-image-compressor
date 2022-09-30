import mainStore from '../store/mainStore';

const checkInsertLimitation = (files, index, insertedIndex) => {
  const storeFiles = mainStore.getState().files;
  const { insertLimit } = mainStore.getState();
  if (Object.keys(storeFiles).length > insertLimit) {
    return false;
  }

  if (insertedIndex > 0 && files.length - insertedIndex === index) {
    return false;
  }
  return true;
};

export default checkInsertLimitation;
