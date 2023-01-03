import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartIsOpen: true,
    cart: [],
    isChanged: false,
    notification: null,
  },
  reducers: {
    replaceCart(state, action) {
      state.cart = action.payload;
    },

    toggleCart(state) {
      state.cartIsOpen = !state.cartIsOpen;
    },

    addToCart(state, action) {
      state.isChanged = true;
      if (state.cart.find(product => product.name === action.payload.name)) {
        const cartItem = state.cart.find(
          product => product.name === action.payload.name
        );
        cartItem.quantity++;
      } else {
        state.cart.push({
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        });
      }
    },

    removeFromCart(state, action) {
      state.isChanged = true;
      const cartItem = state.cart.find(
        product => product.name === action.payload.name
      );

      cartItem.quantity--;

      if (cartItem.quantity === 0) {
        const cartItemIndex = state.cart.findIndex(
          product => product.name === action.payload.name
        );

        state.cart.splice(cartItemIndex, 1);
      }
    },

    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const FetchCartData = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://react-guide-http-fb145-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) throw new Error('Fetching cart data failed!');

      const data = await response.json();

      dispatch(cartActions.replaceCart(data || []));
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};

export const sendCartData = cart => {
  return async dispatch => {
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

      if (!response.ok) throw new Error('Sending cart data failed!');

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
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
