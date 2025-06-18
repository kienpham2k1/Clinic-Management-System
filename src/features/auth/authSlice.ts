import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '../../types/login';

import { login } from '../../services/LoginService'

// export const login = createAsyncThunk(
//     'auth/login',
//     async (
//         credentials: { username: string; password: string },
//         thunkAPI
//     ) => {
//         try {
//             const response = await new Promise((resolve) =>
//                 setTimeout(
//                     () =>
//                         resolve({
//                             accessToken: "fake_token",
//                             refreshToken: "fakeToken"
//                         }),
//                     1000
//                 )
//             );
//             return response as {
//                 accessToken: string,
//                 refreshToken: string
//             };
//         } catch (error) {
//             return thunkAPI.rejectWithValue('Login failed');
//         }
//     }
// )
export interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  error: string | null;
  loading: boolean
}

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
  error: null,
  loading: true
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login: (state, action: PayloadAction<LoginResponse>) => {
    //   state.isAuthenticated = true;
    //   state.accessToken = action.payload.accessToken;
    // },
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = "";
    },
  }, extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
