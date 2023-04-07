import { useState } from 'react';
import { Center, Button, VStack } from '@chakra-ui/react';
import Dialogue from './Dialogue';
import GameStates from '../utils/GameStates';

import { type StorySection, type SetGameState } from './GameScreen';

interface StoryScreenProps {
  storySections: StorySection[];
  setGameState: SetGameState;
}

const StoryScreen = ({ storySections, setGameState }: StoryScreenProps) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number>(1);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState<number>(0);

  const currentSection = storySections.find(
    (section) => section.sectionNumber === currentSectionIndex,
  );

  const handleDialogueClick = () => {
    if (currentDialogueIndex + 1 < currentSection.sectionDialogues.length) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  const handleOptionClick = (optionSection: number) => {
    setCurrentDialogueIndex(0);
    setCurrentSectionIndex(optionSection);
  };

  const handleStoryEnding = () => {
    setGameState(GameStates.END);
    setCurrentSectionIndex(0);
    setCurrentDialogueIndex(0);
  };

  const isOnLastDialogue =
    currentDialogueIndex === currentSection.sectionDialogues.length - 1;

  const currentDialogue = currentSection.sectionDialogues[currentDialogueIndex];

  const isStoryEnded =
    isOnLastDialogue && currentDialogue.options?.length === 0;

  return (
    <Center onClick={handleDialogueClick}>
      <VStack spacing="1em">
        <Dialogue
          text={currentDialogue.text}
          options={currentDialogue.options}
          handleOptionClick={handleOptionClick}
        />
        {isStoryEnded && <Button onClick={handleStoryEnding}>End</Button>}
      </VStack>
    </Center>
  );
};

export default StoryScreen;
