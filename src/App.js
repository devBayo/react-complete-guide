import React, { useCallback, useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagrah, setShowParagrah] = useState(false);
  const [allowParagraph, setAllowParagraph] = useState(false);

  console.log('App running');

  const toggleParagraphHandler = useCallback(() => {
    if (allowParagraph) setShowParagrah(prevValue => !prevValue);
  }, [allowParagraph]);

  const allowParagraphHandler = () => {
    setAllowParagraph(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {<DemoOutput show={showParagrah} />}
      <Button onClick={allowParagraphHandler}>Allow Paragraph</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
