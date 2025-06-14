// src/features/auth/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Giả lập API login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      // Giả lập API call
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              user: { id: 1, name: 'Dr. Kien 2', role: 'doctor m' },
              token: 'fake-jwt-token-123',
            }),
          1000
        )
      );
      return response as { user: any; token: string };
    } catch (error) {
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  } as {
    user: null | { id: number; name: string; role: string };
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
