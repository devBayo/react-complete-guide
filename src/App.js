import React, { useState } from 'react';

import './App.css';
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
      {showParagrah && <p>This is new</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
