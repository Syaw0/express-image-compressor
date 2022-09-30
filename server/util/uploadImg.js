const uploadImg = (uploadedImg, upPath) => new Promise((res, rej) => {
  uploadedImg.mv(upPath, (err) => {
    if (err) {
      rej(new Error());
    } else {
      res(true);
    }
  });
});
module.exports = uploadImg;
