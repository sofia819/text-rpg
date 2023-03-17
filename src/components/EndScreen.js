import GameStates from '../utils/GameStates';
import { Center, Button } from '@chakra-ui/react';

const EndScreen = ({ setGameState }) => {
  return (
    <Center>
      <Button onClick={() => setGameState(GameStates.START)}>Restart</Button>
    </Center>
  );
};

export default EndScreen;
