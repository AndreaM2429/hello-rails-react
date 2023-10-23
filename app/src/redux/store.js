import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './GretingSlice'

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;