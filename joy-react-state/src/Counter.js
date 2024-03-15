import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Value: {count}</button>;
};

export default Counter;
