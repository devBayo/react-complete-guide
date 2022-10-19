import styles from './UserItem.module.css';

const UserItem = props => {
  return (
    <div className={styles['user-item']}>
      {props.user.username} {props.user.age}
    </div>
  );
};

export default UserItem;
