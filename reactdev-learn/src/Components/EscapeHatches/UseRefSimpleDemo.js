import { useRef } from "react";

export default function UseRefBasedCounter() {
  let ref = useRef(0);
  
  function handleClick(e) {
    ref.current = ref.current + 1;
    console.log(`You clicked ${ref.current} times.`);
  }

  return <button onClick={handleClick}>Counter</button>;
}
