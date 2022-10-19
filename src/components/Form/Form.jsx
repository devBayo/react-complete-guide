import React from 'react';
import styles from './Form.module.css';

const Form = props => {
  const onSubmitHandler = event => {
    event.preventDefault();
    const username = event.target['0'].value;
    const age = event.target['1'].value;

    if (!username.length || !age.length) return;
    const newUser = {
      username,
      age: +age,
    };

    event.target['0'].value = '';
    event.target['1'].value = '';

    props.onAddUser(newUser);
  };

  return (
    <form className={styles['form']} onSubmit={onSubmitHandler}>
      <div className={styles['form-group']}>
        <label htmlFor="name" className={styles['form-label']}>
          Username
        </label>
        <input type="text" id="name" className={styles['form-input']} />
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="age" className={styles['form-label']}>
          Age(Years)
        </label>
        <input type="number" id="age" className={styles['form-input']} />
      </div>
      <button type="submit" className={styles['form-button']}>
        Add User
      </button>
    </form>
  );
};

export default Form;
