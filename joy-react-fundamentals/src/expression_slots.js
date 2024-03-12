import React from "react";
import { render } from "react-dom";

const shoppingList = ["apple", "banana", "carrot"];

//expression slot = curly braces i.e. {} - we can put any JavaScript in it
//We can only put valid expressions and NOT Statements (e.g. if statement)
//const element = <div>Items left to purchase: {shoppingList.length}</div>;

const compiledElement = React.createElement(
  "div",
  {},
  "Items left to purchase: ",
  shoppingList.length
);

const root = document.querySelector("#root");

render(compiledElement, root);
