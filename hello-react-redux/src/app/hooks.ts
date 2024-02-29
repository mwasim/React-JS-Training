import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { ReduxAppDispatch, ReduxRootState } from "./redux_store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useReduxAppDispatch = () => useDispatch<ReduxAppDispatch>();
export const useReduxAppSelector: TypedUseSelectorHook<ReduxRootState> =
  useSelector;
