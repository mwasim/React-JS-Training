import React from "react";

const FragmentsDemo = () => {
  return (
    <ul>
      <ListItems />
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  );
};

const ListItems = () => {
  return (
    <React.Fragment>
      <li>Item 1</li>
      <li>Item 2</li>
    </React.Fragment>
  );
};

export default FragmentsDemo;
