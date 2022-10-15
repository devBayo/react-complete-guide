import './ExpenseItem.css';

function ExpenseItem(props) {
  const month = new Intl.DateTimeFormat(navigator.language, {
    month: 'long',
  }).format(props.date);

  const year = props.date.getFullYear();

  const day = new Intl.DateTimeFormat(navigator.language, {
    day: '2-digit',
  }).format(props.date);

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
