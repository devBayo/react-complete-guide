import { useState } from 'react';
import classes from './CartItem.module.css';

const CartItem = props => {
  const [count, setCount] = useState(props.meal.count);

  const decreaseCount = () => {
    setCount(prevCount => {
      return --prevCount;
    });
    props.meal.count--;
  };

  const increaseCount = () => {
    setCount(prevCount => {
      return ++prevCount;
    });
    props.meal.count++;
  };

  return (
    <li className={classes['cart-item']}>
      <div className={classes['cart-item-desc']}>
        <h3 className={classes['cart-item-name']}>{props.meal.name}</h3>
        <div className={classes['cart-item-value']}>
          <p className={classes['cart-item-price']}>${props.meal.price}</p>
          <h4 className={classes['cart-item-count']}>x {count}</h4>
        </div>
      </div>
      <div className={classes['cart-control']}>
        <button onClick={decreaseCount}>-</button>
        <button onClick={increaseCount}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
