import React from 'react';

import UserItem from './UserItem';
import styles from './UserList.module.css';

const UserList = props => {
  return (
    <div className={styles['user-list']}>
      {props.users.map(user => (
        <UserItem user={user} key={Math.random().toString()} />
      ))}
    </div>
  );
};
export default UserList;
