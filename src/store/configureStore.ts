import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultLocale) => getDefaultLocale(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch  = typeof store.dispatch;

export default store;
