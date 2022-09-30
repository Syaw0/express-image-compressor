import React from 'react';
import mainStore from './store/mainStore';
import gCss from './styles/globalCss';
import Flex from './styles/styledComponents/flex';
import Home from './page/Home';
import Download from './page/Download';

function App() {
  gCss();
  const currentComponent = mainStore((state) => state.currentComponent);

  return (

    <Flex justify="center" align="center" dir="column">

      {currentComponent === 'home' && <Home />}
      {currentComponent === 'download' && <Download />}

    </Flex>

  );
}

export default App;
