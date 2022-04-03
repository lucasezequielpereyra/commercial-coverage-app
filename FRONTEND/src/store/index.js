import { configureStore } from '@reduxjs/toolkit';
// reducer
import userReducer from './slices/user/index';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
