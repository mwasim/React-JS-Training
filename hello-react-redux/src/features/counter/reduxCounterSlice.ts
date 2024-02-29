import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxRootState } from "../../app/redux_store";

interface ReduxCounterState {
  value: number;
}

const initialState: ReduxCounterState = {
  value: 0,
};

export const reduxCounterSlice = createSlice({
  name: `reduxCounter`,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  reduxCounterSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: ReduxRootState) => state.counter.value;
export default reduxCounterSlice.reducer;
