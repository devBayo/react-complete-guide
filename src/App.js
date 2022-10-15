import React from 'react';

import Expenses from './components/Expenses/Expenses';

function App() {
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, {})
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses />
    </div>
  );
}

export default App;
