import classes from './Cart.module.css';

const Cart = () => {
  console.log('Hello world');
  return (
    <>
      <div className={classes.overlay}></div>
      <ul className={classes.cart}>
        <li className={classes['cart-item']}>
          <div className={classes['cart-item-desc']}>
            <h3 className={classes['cart-item-name']}>Sushi</h3>
            <div className={classes['cart-item-value']}>
              <p className={classes['cart-item-price']}>$22.99</p>
              <h4 className={classes['cart-item-count']}>x 1</h4>
            </div>
          </div>
          <div className={classes['cart-control']}>
            <button>-</button>
            <button>+</button>
          </div>
        </li>

        <li className={classes['cart-item']}>
          <div className={classes['cart-item-desc']}>
            <h3 className={classes['cart-item-name']}>Sushi</h3>
            <div className={classes['cart-item-value']}>
              <p className={classes['cart-item-price']}>$22.99</p>
              <h4 className={classes['cart-item-count']}>x 1</h4>
            </div>
          </div>
          <div>
            <button>-</button>
            <button>+</button>
          </div>
        </li>

        <li className={classes['cart-item']}>
          <div className={classes['cart-item-desc']}>
            <h3 className={classes['cart-item-name']}>Sushi</h3>
            <div className={classes['cart-item-value']}>
              <p className={classes['cart-item-price']}>$22.99</p>
              <h4 className={classes['cart-item-count']}>x 1</h4>
            </div>
          </div>
          <div className={classes['cart-control']}>
            <button>-</button>
            <button>+</button>
          </div>
        </li>

        <div className={classes['cart-summary']}>
          <h2 className={classes['cart-summary-title']}>Total Amount</h2>
          <h2 className={classes['cart-summary-price']}>$55.99</h2>
        </div>

        <div className={classes['cart-control']}>
          <button className={`${classes['btn-close']} ${classes['btn']}`}>
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
