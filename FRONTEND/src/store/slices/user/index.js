import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userToken: '',
  },
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

export const { setUserToken } = userSlice.actions;

export default userSlice.reducer;

export const dataUser = user => {
  return dispatch => {
    dispatch(setUserToken(user));
  };
};
