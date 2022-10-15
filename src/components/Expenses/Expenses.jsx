import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = () => {
  return (
    <Card className="expenses">
      <ExpenseItem amount="500.00" title="School fees" date={new Date()} />
      <ExpenseItem
        amount="239.67"
        title="Car insurance"
        date={new Date(2021, 2, 28)}
      />
      <ExpenseItem
        amount="340.23"
        title="House rent"
        date={new Date(2019, 4, 15)}
      />
    </Card>
  );
};

export default Expenses;
