import { useRef } from 'react';
import classes from './MealItem.module.css';

const MealItem = props => {
  const inputRef = useRef();

  const onAddHandler = event => {
    event.preventDefault();

    const meal = {
      name: props.name,
      price: +props.price,
      count: +inputRef.current.value,
    };
    props.onAdd(meal);
    // inputRef.current.value = 1;
  };

  return (
    <li className={classes.meal}>
      <div className={classes['meal-text']}>
        <h3 className={classes['meal-name']}>{props.name}</h3>
        <p className={classes['meal-desc']}>{props.desc}</p>
        <h3 className={classes['meal-price']}>${props.price}</h3>
      </div>

      <form onSubmit={onAddHandler} className={classes['meal-checkout']}>
        <div className={classes['meal-checkout-group']}>
          <label htmlFor={props.name}>Amount</label>
          <input
            ref={inputRef}
            type="number"
            min="1"
            defaultValue="1"
            name="amount"
            id={props.name}
          />
        </div>
        <button type="submit" className={classes['meal-checkout-btn']}>
          + Add
        </button>
      </form>
    </li>
  );
};

export default MealItem;
