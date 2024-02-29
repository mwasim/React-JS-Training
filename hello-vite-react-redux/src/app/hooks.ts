import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

//alias useSelector function as useAppSelector Typed hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
