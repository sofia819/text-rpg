import { useState } from 'react';
import { Flex, Card, Center, Box } from '@chakra-ui/react';
import StoryScreen from './StoryScreen';
import StartScreen from './StartScreen';
import EndScreen from './EndScreen';
import GameStates from '../utils/GameStates';

const GameScreen = ({ story }) => {
  const [gameState, setGameState] = useState(GameStates.START);

  return (
    <Box w="100vw" h="100vh">
      <Center width="100vw" height="100vh">
        <Card variant="outline" width="70vw" height="70vh">
          <Flex
            width="100%"
            height="100%"
            alignContent="center"
            justifyContent="center"
          >
            {gameState === GameStates.START && (
              <StartScreen setGameState={setGameState} />
            )}
            {gameState === GameStates.STORY && (
              <StoryScreen story={story} setGameState={setGameState} />
            )}
            {gameState === GameStates.END && (
              <EndScreen setGameState={setGameState} />
            )}
          </Flex>
        </Card>
      </Center>
    </Box>
  );
};

export default GameScreen;
