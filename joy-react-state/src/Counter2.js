//UPGRADED COUNTER
import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";

function Counter() {
  const initialValue = 0;
  const [count, setCount] = React.useState(initialValue);

  const updateCounter = (value) => {
    const nextCount = count + value;
    setCount(nextCount);
  };

  const resetCounter = () => {
    setCount(initialValue);
  };

  const setRandomCount = () => {
    let randomNumber = Math.ceil(Math.random() * 100);
    let nextCount = clamp(randomNumber, 1, 100);
    //console.log(nextCount);
    setCount(nextCount);
  };

  const clamp = (num, min = 0, max = 100) => {
    if (min > max) {
      [min, max] = [max, min];
    }

    return Math.max(min, Math.min(max, num));
  };

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={() => updateCounter(1)}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button onClick={() => updateCounter(10)}>
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={resetCounter}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button onClick={setRandomCount}>
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={() => updateCounter(-10)}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={() => updateCounter(-1)}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;
