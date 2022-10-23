import classes from './MealItem.module.css';

const MealItem = props => {
  return (
    <li className={classes.meal}>
      <div className={classes['meal-text']}>
        <h3 className={classes['meal-name']}>{props.name}</h3>
        <p className={classes['meal-desc']}>{props.desc}</p>
        <h3 className={classes['meal-price']}>${props.price}</h3>
      </div>

      <div className={classes['meal-checkout']}>
        <div className={classes['meal-checkout-group']}>
          <label htmlFor={props.name}>Amount</label>
          <input type="number" defaultValue="1" name="amount" id={props.name} />
        </div>
        <button className={classes['meal-checkout-btn']}>+ Add</button>
      </div>
    </li>
  );
};

export default MealItem;
