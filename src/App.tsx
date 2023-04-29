import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import story from './default.json';
import GameScreen from './components/GameScreen';

const App = () => {
  console.log(theme);
  return (
    <>
      <ChakraProvider theme={theme}>
        <GameScreen
          storySections={story.storySections}
          credits={story.credits}
        />
      </ChakraProvider>
    </>
  );
};

export default App;
