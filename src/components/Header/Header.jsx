import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['header-bg']}></div>
      <div className={classes['text-box']}>
        <h2 className={classes.heading}>Delicious Food, Delivered To You</h2>
        <p className={classes.text}>
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>

        <p className={classes.text}>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs
        </p>
      </div>
    </header>
  );
};

export default Header;
