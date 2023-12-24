import { useState } from "react";

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  return (
      <div style={{marginBottom: "20px"}}>
        <h3>Pending: {pending}</h3>
        <h3>completed: {completed}</h3>

        <button onClick={handleClick}>Buy</button>
      </div>
  );
}
