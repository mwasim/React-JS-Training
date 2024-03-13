import React from "react";

const Button = ({ themeColor, children }) => {
  return (
    <button
      style={{
        border: "2px solid",
        color: themeColor,
        borderColor: themeColor,
        background: "white",
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
    >
      {children}
    </button>
  );
};

const ButtonComponentDemo = () => {
  return (
    <div>
      <Button themeColor="red">Cancel</Button>
      <Button themeColor="green">Confirm</Button>
    </div>
  );
};

export default ButtonComponentDemo;
