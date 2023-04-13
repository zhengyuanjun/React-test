import { configureStore } from '@reduxjs/toolkit';

export const adminStore = configureStore({
  reducer: {
    counter: {},
  },
});
