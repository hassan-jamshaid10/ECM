import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../Features/SearchSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer
  }
});
