import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses() {
  return (
    <Card className="expenses">
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
}

export default Expenses;
