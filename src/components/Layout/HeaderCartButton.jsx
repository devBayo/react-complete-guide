import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const totalCartItems = items.reduce(
    (curItem, item) => curItem + item.amount,
    0
  );

  let buttonClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
