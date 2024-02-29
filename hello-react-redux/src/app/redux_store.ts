import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/reduxCounterSlice";

export const redux_store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ReduxRootState = ReturnType<typeof redux_store.getState>;
export type ReduxAppDispatch = typeof redux_store.dispatch;
