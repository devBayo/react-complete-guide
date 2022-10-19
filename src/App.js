import React, { useState } from 'react';

import { container } from './App.module.css';
import Form from './components/Form/Form';
import UserList from './components/User/UserList';

const DUMMY_USERS = [
  {
    username: 'John',
    age: 20,
  },
  {
    username: 'Doe',
    age: 30,
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const onAddUserHandler = newUser => {
    setUsers(prevUsers => [newUser, ...prevUsers]);
  };

  return (
    <div className={container}>
      <Form onAddUser={onAddUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
