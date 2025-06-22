import { configureStore } from '@reduxjs/toolkit';
import { AnyAction, combineReducers } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import propertiesSlice from './slices/propertiesSlices';
import profileSlice from './slices/profileSlices';
import settingSlice from './slices/settingSlices';
import searchSlice from './slices/searchSlices';
import messageSlice from './slices/messageSlices';
import notificationSlice from './slices/notificationSlices';
import chatRoomSlice from './slices/chatRoomSlices';
import cartSlice from './slices/cartSlices';

const appReducer = combineReducers({
    profile: profileSlice.reducer,
    properties: propertiesSlice.reducer,
    setting: settingSlice.reducer,
    search: searchSlice.reducer,
    chatRoom: chatRoomSlice.reducer,
    message: messageSlice.reducer,
    notification: notificationSlice.reducer,
    cart: cartSlice.reducer,
});

function createStorage() {
    return {
        getItem: async (key: string) => {
            if (typeof window === 'undefined') {
                return null; // Trả về null trong SSR
            }
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const storage = rememberMe ? localStorage : sessionStorage;
            return storage.getItem(key);
        },
        setItem: async (key: string, value: string) => {
            if (typeof window === 'undefined') {
                return; // Không lưu trong SSR
            }
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const storage = rememberMe ? localStorage : sessionStorage;
            storage.setItem(key, value);
        },
        removeItem: async (key: string) => {
            if (typeof window === 'undefined') {
                return; // Không xóa trong SSR
            }
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const storage = rememberMe ? localStorage : sessionStorage;
            storage.removeItem(key);
        },
    };
};

export type RootState = ReturnType<typeof appReducer>;
const rootReducer = (state: RootState | undefined, action: AnyAction) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return appReducer(state, action);
};

const persistConfig = {
    key: 'meal-loop',
    storage: createStorage(),
    whitelist: [
        'profile',
        'properties',
        'setting',
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // tránh cảnh báo khi dùng redux-persist
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);
export { store, persistor };