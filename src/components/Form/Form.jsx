import React, { useState } from 'react';
import styles from './Form.module.css';
import Modal from '../Modal/Modal';

const Form = props => {
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    const username = event.target['0'].value;
    const age = event.target['1'].value;

    if (!username.length || !age.length) {
      setError('empty input');
      return setIsValid(false);
    }
    if (+age < 1) {
      setError('invalid');
      return setIsValid(false);
    }

    const newUser = {
      username,
      age: +age,
    };

    event.target['0'].value = '';
    event.target['1'].value = '';

    props.onAddUser(newUser);
  };

  const onCancelHandler = () => {
    setIsValid(true);
  };

  return (
    <div>
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
      <Modal display={!isValid && 'visible'} onCancel={onCancelHandler}>
        {error === 'empty input'
          ? 'Please enter a valid name and age (non-empty values).'
          : ' Please enter a valid age( > 0).'}
      </Modal>
    </div>
  );
};

export default Form;
