import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
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
    </div>
  );
}

export default App;
