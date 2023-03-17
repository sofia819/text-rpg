import GameStates from '../utils/GameStates';
import { Center, Button } from '@chakra-ui/react';

const StartScreen = ({ setGameState }) => {
  return (
    <Center>
      <Button onClick={() => setGameState(GameStates.STORY)}>Start</Button>
    </Center>
  );
};

export default StartScreen;
