import { ChakraProvider } from '@chakra-ui/react';
import story from './default.json';
import GameScreen from './components/GameScreen';

const App = () => {
  return (
    <ChakraProvider>
      <GameScreen storySections={story.storySections} credits={story.credits} />
    </ChakraProvider>
  );
};

export default App;
