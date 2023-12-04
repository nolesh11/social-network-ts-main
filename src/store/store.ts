import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { authApi } from "./API/authApi";

export const store = configureStore({
  reducer: {
    userSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
