import { createSlice } from '@reduxjs/toolkit';
const initialState = { setting: { themeSchemeDirection: { enableRTL: false } } }
const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        themeSchemeDirection: (state) => {
            // if (typeof action.payload !== typeof undefined) {
            state.setting.themeSchemeDirection.enableRTL = !state.setting.themeSchemeDirection.enableRTL;
            // }
        },

    },
});

export const { themeSchemeDirection } = settingSlice.actions;
export default settingSlice.reducer;
