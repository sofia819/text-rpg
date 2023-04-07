import { useState } from 'react';
import GameStates from '../utils/GameStates';
import { Center, Button } from '@chakra-ui/react';
import { type SetGameState, type CreditsContent } from './GameScreen';
import Credits from './Credits';

interface EndScreenProps {
  setGameState: SetGameState;
  credits: CreditsContent;
}

const EndScreen = ({ setGameState, credits }: EndScreenProps) => {
  const [hasViewedCredits, setHasViewedCredits] = useState<boolean>(false);

  const restartGame = () => {
    setHasViewedCredits(false);
    setGameState(GameStates.START);
  };

  return (
    <Center>
      {!hasViewedCredits ? (
        <Credits credits={credits} setHasViewedCredits={setHasViewedCredits} />
      ) : (
        <Button onClick={restartGame}>Restart</Button>
      )}
    </Center>
  );
};

export default EndScreen;
