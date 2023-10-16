import { createSlice, createAction } from '@reduxjs/toolkit';
import ApiService from '../../apiService';

export const loginUser = (loginData) => {
  return async (dispatch) => {
    try {
      const response = await ApiService.validateLogin(loginData);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      if (data.body && data.body.token) {
        dispatch(loginUserSuccess(data.body.token));
      } else {
        throw new Error('Invalid email or password');
      }

      return data;
    } catch (error) {
      throw new Error('Login failed: ' + error.message);
    }
  };
};

export const logout = createAction('auth/logout');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    loginUserSuccess: (state, action) => {
      state.token = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const selectToken = (state) => state.auth.token;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;

export const { loginUserSuccess } = authSlice.actions;

export default authSlice.reducer;
