import create from 'zustand';

const mainStore = create((set, get) => ({
  insertLimit: 20,
  files: {},
  currentComponent: 'home',
  insertFile: (fileObj) => {
    set((state) => ({
      files: { ...state.files, ...fileObj },
    }));
  },
  deleteFile: (id) => {
    const newFiles = { ...get().files };
    delete newFiles[id];
    set((state) => ({ ...state, files: newFiles }));
  },
}));

export default mainStore;
