import React from 'react';
import mainStore from './store/mainStore';
import gCss from './styles/globalCss';
import Flex from './styles/styledComponents/flex';
import DropZone from './component/DropZone';
import FileInput from './component/fileInput';
import SelectedImage from './component/SelectedImage';
import Text from './styles/styledComponents/text';
import sendImgToServer, { getAllImages } from './utils/sendImgToServer';
import Button from './styles/styledComponents/button';
import Loader from './component/loader';

function App() {
  window.addEventListener('resize', () => {
    document.getElementById('root').style.width = window.innerWidth;
  });
  gCss();
  const storeFiles = mainStore((state) => state.files);
  const appState = mainStore((state) => state.appState);
  const changeAppState = mainStore((state) => state.changeAppState);
  const resetToStartPoint = mainStore((state) => state.resetToStartPoint);

  const sendFiles = async () => {
    changeAppState('sendToServer');
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
      changeAppState('download');
    } else {
      changeAppState('error', {
        msg: 'error happen during sending data to server',
      });
    }
  };

  const resetHandleButton = () => {
    resetToStartPoint();
  };

  const getAllImgButton = () => {
    const dirId = mainStore.getState().dirUniqId;
    const result = getAllImages(dirId);
    if (result) {
      console.log('downloaded perfectly');
    } else {
      console.log('error happen');
    }
  };

  return (

    <Flex
      css={{
        padding: '0 $15',
        '@bp1': {
          padding: '0 $6',
        },
        '@bp3': {
          padding: '0 $3',
        },
      }}
      justify="center"
      align="center"
      dir="column"
    >

      <Text
        id="header"
        css={{
          headline1: '700',
          fontFamily: '$yeseva',
          margin: '$4 0',
          textAlign: 'center',
          '@bp2': {
            headline2: '700',
            fontFamily: '$yeseva',
          },
          '@bp4': {
            headline3: '700',
            fontFamily: '$yeseva',
          },
        }}
      >
        Online Image Compressor
      </Text>

      <Text
        css={{
          headline4: '500',
          color: '$bg800',
          textAlign: 'center',
          marginBottom: '$5',
          '@bp4': {
            headline6: '500',

          },
        }}
      >
        make everything easy with this tool
        {' '}
        <br />
        {' '}
        just drag your image then download it 😙✨
      </Text>

      <DropZone />
      <FileInput />
      <Text css={{
        color: '$bg900',
        subhead1: '500',
        width: '100%',
        margin: '$2 0 $5 0',
      }}
      >
        {appState === 'adding'
        && `Already you have ${Object.keys(storeFiles).length} files`}

        {appState === 'sendToServer'
        && `Sending ${Object.keys(storeFiles).length} files to server to compress them`}

        {appState === 'download'
        && `Now you can download your ${Object.keys(storeFiles).length} files by one or all in one`}

      </Text>
      {appState === 'sendToServer' ? <Loader />
        : <SelectedImage type={appState === 'download' ? 'download' : 'adding'} />}
      {Object.keys(storeFiles).length !== 0
        && (
        <Button
          title={appState === 'download' ? 'download all the images in the one zip file' : 'send images to server to compress them'}
          disabled={(appState === 'sendToServer')}
          onClick={appState === 'download' ? getAllImgButton : sendFiles}
          css={{
            width: '100%',
            backgroundColor: 'RGBA(47, 234, 168, 0.3)',
            border: '2px solid $bg300',
            margin: '$2 0 $1 0',
            textAlign: 'center',
            borderRadius: '10px',
            padding: '$2',
            color: '$bg',
            headline5: '500',
            display: 'flex',
            jc_ac: '',
            '&:hover': {
              backgroundColor: 'RGBA(47, 234, 168, 0.8)',
              color: '$onBg',
            },
          }}
        >
          {appState === 'download' ? 'Download All Images 📥' : 'Start Compress ⚡️'}

        </Button>
        )}

      {appState === 'download'
            && (
            <Button
              onClick={resetHandleButton}
              title="you lost these compressed files..."
              css={{
                color: '$bg600',
                border: '1px solid $bg200',
                width: '100%',
                display: 'flex',
                jc_ac: '',
                borderRadius: '10px',
                margin: '$1 0 $6 0',
                padding: '$1',
                '&:hover': {
                  backgroundColor: '$bg100',
                },

              }}
            >
              compress another images
            </Button>
            )}

    </Flex>

  );
}

export default App;
