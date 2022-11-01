import React, { useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagrah, setShowParagrah] = useState(false);

  console.log('App running');

  const toggleParagraphHandler = () => {
    setShowParagrah(prevValue => !prevValue);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {<DemoOutput show={showParagrah} />}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
