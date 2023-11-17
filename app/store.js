// store.js

import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './redux/authApi';
import { postsApi } from './redux/postsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from "./redux/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    posts: postsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, postsApi.middleware),
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState();

setupListeners(store.dispatch);
