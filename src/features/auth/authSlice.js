import { createSlice, createAction } from '@reduxjs/toolkit';
import { validateLogin, getUserProfile } from '../../apiService';

export const loginUser = (loginData) => {
  return async (dispatch) => {
    try {
      const response = await validateLogin(loginData);

      const data = await response.json();

      if (data.body?.token) {
        dispatch(loginUserSuccess(data.body.token));
      } else {
        console.log(data.message)
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
};

export const logout = createAction('auth/logout');

export const fetchUserProfile = (token) => {
  return async (dispatch) => {
    try {
      const response = await getUserProfile(token);

      const data = await response.json();

      console.log(data.body.userName);

      if (data.body) {
        dispatch(updateUserName(data.body.userName));
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
};

export const updateUserName = createAction('auth/updateUserName');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userName: null, 
    status: 'idle',
    error: null,
  },
  reducers: {
    loginUserSuccess: (state, action) => {
      state.token = action.payload;
      state.userName = null;
      state.status = 'succeeded';
      state.error = null;
    },
    logout: (state) => {
      state.token = null;
      state.status = 'idle';
      state.error = null;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const selectToken = (state) => state.auth.token;
export const selectUserName = (state) => state.auth.userName;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;

export const { loginUserSuccess } = authSlice.actions;

export default authSlice.reducer;
