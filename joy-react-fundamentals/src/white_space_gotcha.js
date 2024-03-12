import { createRoot } from "react-dom/client";

const noOfItemsPurchased = 5;

//Use the space character to add space in React {` `}
const element = (
  <div>
    <strong>Number of items purchased:</strong>
    {` `}
    {noOfItemsPurchased}
  </div>
);

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);
