import { useState } from 'react';

const useInput = validate => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validate(enteredValue);
  const isInvalid = !enteredValueIsValid && isTouched;

  const inputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    enteredValue,
    enteredValueIsValid,
    isInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
