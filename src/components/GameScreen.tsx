import { useState } from 'react';
import { Flex, Card, Center, Box } from '@chakra-ui/react';
import StoryScreen from './StoryScreen';
import StartScreen from './StartScreen';
import EndScreen from './EndScreen';
import GameStates from '../utils/GameStates';
import { type Option } from './Dialogue';
import ThemeSwitcher from './ThemeSwitcher';

export type GameState = (typeof GameStates)[keyof typeof GameStates];

export type SetGameState = React.Dispatch<React.SetStateAction<GameState>>;

type Dialogue = {
  text: string;
  options?: Option[];
};

export type StorySection = {
  sectionNumber: number;
  sectionDialogues: Dialogue[];
};

export type CreditsContent = {
  creator: string;
};

interface GameScreenProps {
  storySections: StorySection[];
  credits: CreditsContent;
}

const GameScreen = ({ storySections, credits }: GameScreenProps) => {
  const [gameState, setGameState] = useState<GameState>(GameStates.START);

  return (
    <Box w="100vw" h="100vh">
      <Center width="100vw" height="100vh">
        <Card variant="outline" width="90vw" height="90vh">
          <ThemeSwitcher />
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
              <StoryScreen
                storySections={storySections}
                setGameState={setGameState}
              />
            )}
            {gameState === GameStates.END && (
              <EndScreen setGameState={setGameState} credits={credits} />
            )}
          </Flex>
        </Card>
      </Center>
    </Box>
  );
};

export default GameScreen;
