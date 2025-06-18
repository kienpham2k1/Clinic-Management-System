import { createSlice } from '@reduxjs/toolkit';
import { UserProfile } from '../../types/user';

export interface ProfileState {
    loading: boolean;
    userProfile: UserProfile;
}

const initialState: ProfileState = {
    loading: true,
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
        fetchProfile: (state, action) => {
            state.userProfile = action.payload
        },
        updateProfile: (state, action) => {
            state.userProfile = action.payload
        },
        removeProfile: (state, action) => {
            state.userProfile = action.payload
        },
    },
});

export const { loading, fetchProfile, updateProfile, removeProfile } = profileSlice.actions;
export default profileSlice.reducer;
