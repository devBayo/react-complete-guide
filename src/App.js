import React from 'react';

import { container } from './App.module.css';
import Form from './components/Form/Form';
import UserList from './components/User/UserList';

function App() {
  return (
    <div className={container}>
      <Form />
      <UserList />
    </div>
  );
}

export default App;
