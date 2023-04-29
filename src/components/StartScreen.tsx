import GameStates from '../utils/GameStates';
import { Center, Button, Heading, Box, VStack } from '@chakra-ui/react';
import { type SetGameState } from './GameScreen';

interface StartScreenProps {
  setGameState: SetGameState;
}

const StartScreen = ({ setGameState }: StartScreenProps) => {
  return (
    <Center>
      <VStack spacing="10">
        <Heading as="h1" size="2xl">
          Text RPG
        </Heading>
        <Button onClick={() => setGameState(GameStates.STORY)}>Start</Button>
      </VStack>
    </Center>
  );
};

export default StartScreen;
