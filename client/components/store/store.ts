// "use client";
import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlices";
import { PropSlices } from "./PropSlices";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    props: PropSlices.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
