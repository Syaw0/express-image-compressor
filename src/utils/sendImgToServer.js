/* eslint-disable no-use-before-define */
import { nanoid } from 'nanoid';
import mainStore from '../store/mainStore';

const sendImgToServer = async () => {
  try {
    const { files } = mainStore.getState();
    const formData = new FormData();
    const idListed = Object.keys(files);
    for (let i = 0; i !== idListed.length; i += 1) {
      formData.append(idListed[i], files[idListed[i]].file);
    }
    formData.append('id', nanoid());

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
    return {
      status: false,
      msg: 'error',
    };

  //   if (json.id) {
  //     getImages(json.id);
  //   }
  } catch (err) {
    return {
      status: false,
      msg: 'error',
    };
  }
};

const getImages = async (id) => {
  console.log(id);
  const response = await fetch(`http://localhost:8080/getImg/${id}`);
//   console.log(response)
  // const json = await response.json();
  // console.log(json)
};

export default sendImgToServer;
