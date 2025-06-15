import { createSlice } from '@reduxjs/toolkit';
import { UserProfile } from '../../types/user';
interface AuthState {
  user: null | UserProfile,
  token: null | string,
  isAuthenticated: boolean,
  loading: boolean,
  error: any,
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(login.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.isAuthenticated = true;
  //       state.loading = false;
  //     })
  //     .addCase(login.rejected, (state, action) => {
  //       state.error = action.payload as string;
  //       state.loading = false;
  //     });
  // },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
