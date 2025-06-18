// src/app/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from '../features/auth/authSlice';
import profileReducer from '../features/profile/profileSlice';
import settingReducer from '../features/setting/settingSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'profile, setting']
};

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    setting: settingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;