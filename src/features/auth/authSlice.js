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

      if (data.body) {
        dispatch(updateUserName(data.body.userName));
        dispatch(updateFirstName(data.body.firstName));
        dispatch(updateLastName(data.body.lastName));
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };
};

export const updateUserName = createAction('auth/updateUserName');
export const updateFirstName = createAction('auth/updateFirstName');
export const updateLastName = createAction('auth/updateLastName');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userName: null,
    firstName: null,
    lastName: null,
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
      state.firstName = null;
      state.lastName = null;
      state.status = 'idle';
      state.error = null;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const selectToken = (state) => state.auth.token;
export const selectUserName = (state) => state.auth.userName;
export const selectFirstName = (state) => state.auth.firstName;
export const selectLastName = (state) => state.auth.lastName;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;

export const { loginUserSuccess } = authSlice.actions;

export default authSlice.reducer;
