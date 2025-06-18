import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout } from "../../features/auth/authSlice";
import { removeProfile } from "../../features/profile/profileSlice";
import { UserProfile } from "../../types/user";

const fetchProfile = createAsyncThunk(
    'user/get-profile',
    async (
        _,
        thunkAPI
    ) => {
        try {
            const response: UserProfile = await new Promise((resolve) =>
                setTimeout(
                    () =>
                        resolve({
                            id: "1",
                            profileImage: null,
                            firstName: "Kien",
                            lastName: "Pham",
                            email: "kienpt32@mail.com",
                            phoneNumber: "123",
                        }),
                    1000
                )
            );
            return response as UserProfile;
        } catch (error) {
            thunkAPI.dispatch(removeProfile())
            thunkAPI.dispatch(logout());
            return Promise.reject(error);
        }
    }
)
export { fetchProfile }
