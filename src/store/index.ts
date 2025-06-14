// src/app/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import themeReducer from '../features/theme/themeSlice';
const rootReducers = combineReducers({
    auth: authReducer,
    theme: themeReducer,
});
export const store = configureStore({
    reducer: rootReducers
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
