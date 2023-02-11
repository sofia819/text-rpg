import React from 'react';
import story from './default.json';
import DialoguePanel from './components/DialougePanel';

const App = () => {
  return <DialoguePanel story={story} />;
};

export default App;
