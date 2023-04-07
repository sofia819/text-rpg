import GameStates from '../utils/GameStates';
import { Center, Button } from '@chakra-ui/react';
import { type SetGameState } from './GameScreen';

interface StartScreenProps {
  setGameState: SetGameState;
}

const StartScreen = ({ setGameState }: StartScreenProps) => {
  return (
    <Center>
      <Button onClick={() => setGameState(GameStates.STORY)}>Start</Button>
    </Center>
  );
};

export default StartScreen;
