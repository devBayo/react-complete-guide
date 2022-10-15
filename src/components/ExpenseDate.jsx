function ExpenseDate(props) {
  const month = new Intl.DateTimeFormat(navigator.language, {
    month: 'long',
  }).format(props.date);

  const year = props.date.getFullYear();

  const day = new Intl.DateTimeFormat(navigator.language, {
    day: '2-digit',
  }).format(props.date);

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
