import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import DescribingTheUI from './DescribingTheUI'; //Uncomment to render DescribingTheUI
// import AddingInteractivity from "./AddingInteractivity";
import EscapeHatches from "./EscapeHatches";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <DescribingTheUI /> //Uncomment to render DescribingTheUI */}
    {/* <AddingInteractivity /> */}
    <EscapeHatches />
  </React.StrictMode>
);
