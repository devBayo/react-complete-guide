import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { cartActions } from './store/cart';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const { cartIsOpen } = useSelector(state => state);
  const { cart } = useSelector(state => state);
  const { notification } = useSelector(state => state);

  useEffect(() => {
    const sendData = async () => {
      try {
        dispatch(
          cartActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
          })
        );

        const response = await fetch(
          'https://react-guide-http-fb145-default-rtdb.firebaseio.com/cart.json',
          {
            method: 'PUT',
            body: JSON.stringify(cart),
          }
        );

        if (!response.ok) throw new Error();

        dispatch(
          cartActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
      } catch (error) {
        dispatch(
          cartActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Sending cart data failed!',
          })
        );
      }
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendData();
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
