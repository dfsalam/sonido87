import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export default store;
