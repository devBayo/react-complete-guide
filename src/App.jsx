import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { cartIsOpen } = useSelector(state => state);
  const { cart } = useSelector(state => state);
  const { notification } = useSelector(state => state);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {cartIsOpen && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
