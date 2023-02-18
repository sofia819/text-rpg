import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import story from './default.json';
import DialoguePanel from './components/DialougePanel';

const App = () => {
  return (
    <ChakraProvider>
      <DialoguePanel story={story} />
    </ChakraProvider>
  );
};

export default App;
