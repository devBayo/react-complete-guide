import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartIsOpen: true, cart: [] },
  reducers: {
    toggleCart(state) {
      state.cartIsOpen = !state.cartIsOpen;
    },

    addToCart(state, action) {
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
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
