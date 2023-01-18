const disableDefaultDropBehavior = () => {
  window.addEventListener('drop', (e) => {
    e.preventDefault();
  });
  window.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
};

export default disableDefaultDropBehavior;
