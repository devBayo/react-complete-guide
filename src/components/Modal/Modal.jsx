import React from 'react';

import './Modal.css';

const Modal = () => {
  return (
    <div>
      <div className="modal">
        <h2 className="modal-title">Invalid input</h2>
        <div className="modal-details">
          <p className="modal-text">Please enter a valid age({'>'}0).</p>
          <button className="modal-button">Okay</button>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};
export default Modal;
