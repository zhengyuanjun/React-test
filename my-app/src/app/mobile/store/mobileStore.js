import { configureStore } from '@reduxjs/toolkit';

export const mobileStore = configureStore({
  reducer: {
    counter: {},
  },
});
