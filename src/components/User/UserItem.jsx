import styles from './UserItem.module.css';

const UserItem = props => {
  return (
    <div className={styles['user-item']}>
      {props.user.username} ({props.user.age}{' '}
      {props.user.age > 1 ? 'years' : 'year'} old)
    </div>
  );
};

export default UserItem;
