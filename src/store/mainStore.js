import create from 'zustand';

const mainStore = create((set, get) => ({
  insertLimit: 20,
  files: {},
  dirUniqId: '',
  isError: false,
  errMsg: '',
  appState: 'adding', // we have 4 state 1.adding file 2.send to server 3.download 4.error
  changeAppState: (newState, msg) => {
    if (newState === 'error') {
      set((state) => ({
        ...state, appState: newState, isError: true, errMsg: msg.msg,
      }));
    } else {
      set((state) => ({ ...state, appState: newState }));
    }
  },
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
  resetToStartPoint: () => {
    set((state) => ({
      ...state,
      files: {},
      isError: false,
      errMsg: '',
      appState: 'adding',
    }));
  },
}));

export default mainStore;
