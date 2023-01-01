import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {
  const { cart } = useSelector(state => state);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart {cart.length === 0 && 'is empty'} </h2>
      <ul>
        {cart.map(product => (
          <CartItem
            key={product.name}
            item={{
              title: product.name,
              quantity: product.quantity,
              total: product.quantity * product.price,
              price: product.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
