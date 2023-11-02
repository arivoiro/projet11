import { createSlice, createAction } from '@reduxjs/toolkit';
import { validateLogin, getUserProfile } from '../../apiService';

// Asynchronous action for user login.
export const loginUser = (loginData) => {
  return async (dispatch) => {
    try {
      // Attempt to login by calling the login validation API.
      const response = await validateLogin(loginData);
      const data = await response.json();

      // If a token is received, login is successful.
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

// Asynchronous action to retrieve the user's profile
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

// Synchronous actions created to handle different parts of the state.
export const logout = createAction('auth/logout');
export const updateUserName = createAction('auth/updateUserName');
export const updateFirstName = createAction('auth/updateFirstName');
export const updateLastName = createAction('auth/updateLastName');
export const updateCategory = createAction('auth/updateCategory');
export const updateNote = createAction('auth/updateNote');

// Defining the slice with its initial state and reducers.
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
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
    updateNote: (state, action) => {
      state.note = action.payload;
    },
  },
});

// Selectors to access different parts of the state.
export const selectToken = (state) => state.auth.token;
export const selectUserName = (state) => state.auth.userName;
export const selectFirstName = (state) => state.auth.firstName;
export const selectLastName = (state) => state.auth.lastName;
export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;
export const selectCategory = (state) => state.auth.category;
export const selectNote = (state) => state.auth.note;

export const { loginUserSuccess } = authSlice.actions;

export default authSlice.reducer;
