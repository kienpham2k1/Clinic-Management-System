// LoginService.ts
import { createAsyncThunk } from "@reduxjs/toolkit";

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
            return response as {
                accessToken: string,
                refreshToken: string
            };
        } catch (error) {
            return thunkAPI.rejectWithValue('Login failed');
        }
    }
)
export { login }
