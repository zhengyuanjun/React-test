import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import {navMenuSlice} from "../features/navMenu/navMenuSlice";
import {loginSlice} from "../features/login/loginSlice";


export const homeStore = configureStore({
  reducer: {
    counter: counterReducer,
    navMenu:navMenuSlice.reducer,
    login:loginSlice.reducer
  },
});
