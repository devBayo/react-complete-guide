import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Username
        </label>
        <input type="text" id="name" className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="age" className="form-label">
          Age(Years)
        </label>
        <input type="number" id="age" className="form-input" />
      </div>
      <button type="submit" className="form-button">
        Add User
      </button>
    </form>
  );
};

export default Form;
