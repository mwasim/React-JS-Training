//1. BUILD YOUR OWN REACT DEMO
//import "./build_your_own_react.js";

//2. Expression Slots
//import "./expression_slots.js";

//3. WHITE SPACE GOTCHA
//import "./white_space_gotcha";

//4. CONVERT RAW HTML TO JSX
//import "./ex_convert_rawhtml_to_jsx";
//import "./ex_rawhtml_to_jsx_critter";

//5. Components and Props in react
//import "./component_props";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";

//6. Components - Exercise1 - ContactCard
//import ContactCardDemo from "./component_ex_contactcard";
import ButtonComponentDemo from "./component_ex_button";

const root1 = ReactDOM.createRoot(document.getElementById("root"));

//const root = ReactDOM.createRoot(document.getElementById("root"));
root1.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ContactCardDemo /> */}
    <ButtonComponentDemo />
  </React.StrictMode>
);
