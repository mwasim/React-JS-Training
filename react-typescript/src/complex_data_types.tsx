import React from "react";

const ComplexDataTypes = () => {
  //Tuple - a type of array you can insert multiple types
  //In JavaScript, you can have an array of mixed types, but
  //In Typescript, you've to set types exlicitly using TUPLES
  //let aTuple: [string, number] = ["two", 2];

  //enum
  //   enum Codes {
  //     first = 1,
  //     second = `2`,
  //   }

  //any - use it sparingly
  //let firstName: any = `Many`;
  let firstName: any = 5;

  //void
  //const warning = (): void => console.log(`Warning!`);
  //warning();

  return (
    <div className="App">
      <header className="App-header">
        The value {firstName} is of {typeof firstName} type.
      </header>
    </div>
  );
};

export default ComplexDataTypes;
