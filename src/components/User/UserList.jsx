import React from 'react';

import UserItem from './UserItem';
import styles from './UserList.module.css';

const userlist = [
  {
    username: 'John',
    age: 20,
  },
  {
    username: 'Doe',
    age: 30,
  },
  {
    username: 'John',
    age: 20,
  },
];

const UserList = () => {
  return (
    <div className={styles['user-list']}>
      {userlist.map(user => (
        <UserItem user={user} key={Math.random().toString()} />
      ))}
    </div>
  );
};
export default UserList;
