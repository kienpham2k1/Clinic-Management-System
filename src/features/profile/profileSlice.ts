import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile } from '../../types/user';
import { fetchProfile } from '../../services/user/UserService';

export interface ProfileState {
    loading: boolean;
    userProfile: UserProfile | null;
}

const initialState: ProfileState = {
    loading: false,
    userProfile: {
        id: null,
        profileImage: null,
        firstName: null,
        lastName: null,
        email: null,
        phoneNumber: null,
    }
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        loading: (state) => {
            state.loading = !state.loading
        },
        // fetchProfile: (state, action) => {
        //     state.userProfile = action.payload
        // },
        updateProfile: (state, action) => {
            state.userProfile = action.payload
        },
        removeProfile: (state) => {
            state.userProfile = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<UserProfile>) => {
                state.loading = false;
                state.userProfile = {
                    id: action.payload.id,
                    profileImage: action.payload.profileImage,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    email: action.payload.email,
                    phoneNumber: action.payload.phoneNumber,
                }
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.loading = false;
            });
    }
});

export const { loading, updateProfile, removeProfile } = profileSlice.actions;
export default profileSlice.reducer;
