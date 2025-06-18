import { createSlice } from '@reduxjs/toolkit';
const initialState = { setting: { theme_scheme_direction: { value: false } } }
const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        theme_scheme_direction: (state) => {
            // if (typeof action.payload !== typeof undefined) {
                state.setting.theme_scheme_direction.value = !state.setting.theme_scheme_direction.value;
            // }
        },

    },
});

export const { theme_scheme_direction } = settingSlice.actions;
export default settingSlice.reducer;
