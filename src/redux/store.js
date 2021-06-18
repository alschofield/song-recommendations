import { configureStore } from '@reduxjs/toolkit';

// pages
import homeReducer from '../features/pages/home/homeSlice';

// components


export default configureStore({
  reducer: {
    // page
    home: homeReducer,

    // components
  },
});
