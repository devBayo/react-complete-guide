import classes from './Nav.module.css';

const Nav = props => {
  const toatlCount = props.meals
    .map(meal => meal.count)
    .reduce((prev, cur) => prev + cur, 0);

  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <h1>ReactMeals</h1>

        <button onClick={props.onClick}>
          Your Cart <span>{toatlCount || 0}</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
