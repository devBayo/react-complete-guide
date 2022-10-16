import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangedHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />
      <ExpenseItem
        amount={props.item[0].amount}
        title={props.item[0].title}
        date={props.item[0].date}
      />
      <ExpenseItem
        amount={props.item[1].amount}
        title={props.item[1].title}
        date={props.item[1].date}
      />
      <ExpenseItem
        amount={props.item[2].amount}
        title={props.item[2].title}
        date={props.item[2].date}
      />
      <ExpenseItem
        amount={props.item[3].amount}
        title={props.item[3].title}
        date={props.item[3].date}
      />
    </Card>
  );
};

export default Expenses;
