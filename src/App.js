import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import story from './default.json';
import GameScreen from './components/GameScreen';

const App = () => {
  return (
    <ChakraProvider>
      <GameScreen story={story} />
    </ChakraProvider>
  );
};

export default App;
