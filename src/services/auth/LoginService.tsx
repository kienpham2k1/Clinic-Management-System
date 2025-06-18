// LoginService.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginResponse } from "../../types/login";

const login = createAsyncThunk(
    'auth/login',
    async (
        credentials: { username: string; password: string },
        thunkAPI
    ) => {
        try {
            const response = await new Promise((resolve) =>
                setTimeout(
                    () =>
                        resolve({
                            accessToken: "fake_token",
                            refreshToken: "fakeToken"
                        }),
                    1000
                )
            );
            return response as LoginResponse;
        } catch (error) {
            return thunkAPI.rejectWithValue('Login failed');
        }
    }
)
export { login }
