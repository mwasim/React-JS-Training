import React from "react";
import { createRoot } from "react-dom/client";

function FriendlyGreeting(props) {
  return (
    <p
      style={{
        fontSize: "1.25rem",
        textAlign: "center",
        color: "sienna",
      }}
    >
      Greetings, {props.name}!
    </p>
  );
}

const container = document.querySelector("#root");
const root = createRoot(container);

const reactElement = React.createElement(FriendlyGreeting, {
  name: `Siri`,
});

console.log(reactElement);
//root.render(reactElement);

root.render(
  <>
    <FriendlyGreeting name="John Doe" />
    <FriendlyGreeting name="Jane" />
  </>
);
