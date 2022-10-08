import { configureStore } from "@reduxjs/toolkit";
import cryptReducer from "../slices/cryptoSlice";
import { bitcoinApi } from "../api/cryptoApi";

export const store = configureStore({
  reducer: {
    [bitcoinApi.reducerPath]: bitcoinApi.reducer,
    crypto: cryptReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(bitcoinApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
