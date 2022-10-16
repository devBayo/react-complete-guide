import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = event => {
    // setEnteredTitle(event.target.value);

    // Using one state instead
    // setUserInput({
    //   // This state depends on previous state
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    setUserInput(userInput => {
      // where userinput === previousState
      return { ...userInput, enteredTitle: event.target.value };
    });

    console.log(userInput.enteredTitle);
  };

  const amountChangeHandler = event => {
    // setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };

  const dateChangeHandler = event => {
    // setEnteredDate(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
