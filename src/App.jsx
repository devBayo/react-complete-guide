import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, FetchCartData } from './store/cart';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { cartIsOpen, cart, notification, isChanged } = useSelector(
    state => state
  );

  useEffect(() => {
    dispatch(FetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (isChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch, isChanged]);

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
