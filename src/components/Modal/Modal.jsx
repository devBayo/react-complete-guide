import React from 'react';

import styles from './Modal.module.css';

const Modal = props => {
  return (
    <div>
      <div className={`${styles['modal']} ${styles[props.display]}`}>
        <h2 className={styles['modal-title']}>Invalid input</h2>
        <div className={styles['modal-details']}>
          <p className={styles['modal-text']}>{props.children}</p>
          <button onClick={props.onCancel} className={styles['modal-button']}>
            Okay
          </button>
        </div>
      </div>
      <div
        onClick={props.onCancel}
        className={`${styles['overlay']} ${styles[props.display]}`}
      ></div>
    </div>
  );
};
export default Modal;
