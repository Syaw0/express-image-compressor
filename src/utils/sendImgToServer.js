/* eslint-disable no-use-before-define */
import { nanoid } from 'nanoid';
import mainStore from '../store/mainStore';

const sendImgToServer = async () => {
  const errMsg = { status: false, msg: 'error' };
  try {
    const { files } = mainStore.getState();
    const formData = new FormData();
    const idListed = Object.keys(files);
    const uniqId = nanoid();
    mainStore.setState((state) => ({ ...state, dirUniqId: uniqId }));
    for (let i = 0; i !== idListed.length; i += 1) {
      formData.append(idListed[i], files[idListed[i]].file);
    }
    formData.append('id', uniqId);

    const response = await fetch('http://localhost:8080/postImg', {
      method: 'POST',
      body: formData,

    });
    const json = await response.json();
    if (json) {
      return {
        status: true,
        data: json,
      };
    }
    return errMsg;
  } catch (err) {
    return errMsg;
  }
};

const getImage = async (dirId, id) => {
  try {
    const response = await fetch(`http://localhost:8080/getImg/${dirId}/${id}`);
    const data = await response.json();
    if (data.status) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

const getAllImages = async (dirId) => {
  try {
    const response = await fetch(`http://localhost:8080/getImg/${dirId}/null`);
    const data = await response.json();
    if (data.status) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
};

export default sendImgToServer;
export { getAllImages, getImage };
