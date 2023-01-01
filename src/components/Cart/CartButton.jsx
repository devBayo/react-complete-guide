import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart';
import classes from './CartButton.module.css';

const CartButton = () => {
  const totalItem = useSelector(state =>
    state.cart.reduce((prev, cur) => prev + cur.quantity, 0)
  );

  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
};

export default CartButton;
