import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [formula, setFormula] = useState("");
  const [hasDecimal, setHasDecimal] = useState(false);

  const handleNumClick = (num) => {
    if (display === "0" && num === "0") return;
    if (display === "0") {
      setDisplay(num);
    } else {
      //setDisplay(display + num);
      setDisplay(formula + num);
    }
    setFormula(formula + num);
  };

  const handleOperatorClick = (op) => {
    if (formula === "") return;
    if (
      formula.endsWith("+") ||
      formula.endsWith("-") ||
      formula.endsWith("*") ||
      formula.endsWith("/")
    ) {
      setFormula(formula.slice(0, -1) + op);
    } else {
      setFormula(formula + op);
    }
    //setDisplay("0");
    setDisplay(op);
    setHasDecimal(false);
  };

  const handleDecimalClick = () => {
    if (!hasDecimal) {
      setDisplay(display + ".");
      setFormula(formula + ".");
      setHasDecimal(true);
    }
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(formula);
      setDisplay(result.toFixed(2));
      setFormula(result.toFixed(2));
      setHasDecimal(false);
    } catch (error) {
      setDisplay("Error");
      setFormula("");
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
    setFormula("");
    setHasDecimal(false);
  };

  return (
    <div className="calculator">
      <div id="display">{display}</div>
      <div className="buttons">
        <button id="clear" onClick={handleClearClick}>
          AC
        </button>
        <button id="divide" onClick={() => handleOperatorClick("/")}>
          /
        </button>
        <button id="multiply" onClick={() => handleOperatorClick("*")}>
          x
        </button>
        <button id="subtract" onClick={() => handleOperatorClick("-")}>
          -
        </button>
        <button id="seven" onClick={() => handleNumClick("7")}>
          7
        </button>
        <button id="eight" onClick={() => handleNumClick("8")}>
          8
        </button>
        <button id="nine" onClick={() => handleNumClick("9")}>
          9
        </button>
        <button id="add" onClick={() => handleOperatorClick("+")}>
          +
        </button>
        <button id="four" onClick={() => handleNumClick("4")}>
          4
        </button>
        <button id="five" onClick={() => handleNumClick("5")}>
          5
        </button>
        <button id="six" onClick={() => handleNumClick("6")}>
          6
        </button>
        <button id="one" onClick={() => handleNumClick("1")}>
          1
        </button>
        <button id="two" onClick={() => handleNumClick("2")}>
          2
        </button>
        <button id="three" onClick={() => handleNumClick("3")}>
          3
        </button>
        <button id="equals" onClick={handleEqualsClick}>
          =
        </button>
        <button id="zero" onClick={() => handleNumClick("0")}>
          0
        </button>
        <button id="decimal" onClick={handleDecimalClick}>
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
