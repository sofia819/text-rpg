import { useState } from 'react';
import Dialogue from './Dialogue';

const SectionPanel = ({ section, setCurrentSection }) => {
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

  const handleDialogueClick = () => {
    if (currentDialogueIndex + 1 < section.length) {
      setCurrentDialogueIndex(currentDialogueIndex + 1);
    }
  };

  const handleOptionClick = (optionSection) => {
    setCurrentDialogueIndex(0);
    setCurrentSection(optionSection);
  };

  const currentDialogue = section[currentDialogueIndex];
  return (
    <p onClick={handleDialogueClick}>
      <Dialogue
        text={currentDialogue.text}
        options={currentDialogue.options}
        handleDialogueClick={handleDialogueClick}
        handleOptionClick={handleOptionClick}
      />
    </p>
  );
};

export default SectionPanel;
