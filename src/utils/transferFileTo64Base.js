const transferFileTo64Base = (file) => {
  const fileReader = new FileReader();
  return new Promise((res) => {
    fileReader.readAsDataURL(file);
    fileReader.onloadend = (e) => {
      res(e.target.result);
    };
  });
};

export default transferFileTo64Base;
