import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
  return (
    <>
      <div onClick={props.onClick} className={classes.overlay}></div>
      <ul className={classes.cart}>
        {props.meals.map(meal => {
          return <CartItem key={meal.name} meal={meal} />;
        })}

        <div className={classes['cart-summary']}>
          <h2 className={classes['cart-summary-title']}>Total Amount</h2>
          <h2 className={classes['cart-summary-price']}>$55.99</h2>
        </div>

        <div className={classes['cart-control']}>
          <button
            onClick={props.onClick}
            className={`${classes['btn-close']} ${classes['btn']}`}
          >
            Close
          </button>
          <button className={`${classes['btn-order']} ${classes['btn']}`}>
            Order
          </button>
        </div>
      </ul>
    </>
  );
};

export default Cart;
