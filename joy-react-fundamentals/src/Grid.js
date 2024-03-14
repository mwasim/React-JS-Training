import React from "react";
import range from "./utils/range";

const Grid = ({ numRows, numCols }) => {
  return (
    <div className="grid">
      {range(numRows).map((rowNumber) => (
        <div className="row" key={rowNumber}>
          {range(numCols).map((colNumbr) => (
            <div className="cell" key={colNumbr} />
          ))}
        </div>
      ))}
    </div>
  );
};

const GridDemo = () => {
  return (
    <>
      <Grid numRows={3} numCols={4} />
    </>
  );
};

export default GridDemo;
