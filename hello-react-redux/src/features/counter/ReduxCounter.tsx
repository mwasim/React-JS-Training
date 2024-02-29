import { useReduxAppDispatch, useReduxAppSelector } from "../../app/hooks";
import { decrement, increment, selectCount } from "./reduxCounterSlice";

export function Counter() {
  const count = useReduxAppSelector(selectCount);
  const dispatch = useReduxAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
