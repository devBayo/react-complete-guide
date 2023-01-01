import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';

const store = configureStore({
  reducer: cartReducer,
});

export default store;
