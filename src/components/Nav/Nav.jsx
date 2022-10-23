import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.container}>
        <h1>ReactMeals</h1>

        <button>
          Your Cart <span>0</span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
