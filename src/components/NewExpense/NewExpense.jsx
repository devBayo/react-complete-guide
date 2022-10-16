import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  const saveExpenseDataHandler = enteredExpenseDate => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
