import { useState } from 'react';
import SectionPanel from './SectionPanel';

const DialoguePanel = ({ story }) => {
  const [currentSection, setCurrentSection] = useState(1);

  const sections = {};

  story.forEach((section) => {
    sections[section.section] = section.content;
  });

  return (
    <SectionPanel
      section={sections[currentSection]}
      setCurrentSection={setCurrentSection}
    />
  );
};

export default DialoguePanel;
