import { useState } from 'react';
import { Center } from '@chakra-ui/react';
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

  const hasPreviousDialogue = currentDialogueIndex - 1 >= 0;

  const handlePreviousDialogue = () => {
    if (hasPreviousDialogue) {
      setCurrentDialogueIndex(currentDialogueIndex - 1);
    }
  };

  const hasNextDialogue =
    currentDialogueIndex + 1 < currentSection.sectionDialogues.length;

  const handleNextDialogue = () => {
    if (hasNextDialogue) {
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
    <Center>
      <Dialogue
        text={currentDialogue.text}
        options={currentDialogue.options}
        handleOptionClick={handleOptionClick}
        isStoryEnded={isStoryEnded}
        hasPreviousDialogue={hasPreviousDialogue}
        handlePreviousDialogue={handlePreviousDialogue}
        handleNextDialogue={handleNextDialogue}
        handleStoryEnding={handleStoryEnding}
      />
    </Center>
  );
};

export default StoryScreen;
