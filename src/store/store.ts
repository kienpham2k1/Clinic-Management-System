// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer,
    },
});


// Type hỗ trợ cho hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
