import { useState } from "react";

/*
    UPDATE OBJECTS IN STATE (REACT STATE) DEMO (not premitive values but OBJECTS)

    WRONG APPROACH:
    onPointerMove={e => {
        position.x = e.clientX;
        position.y = e.clientY;
    }}

    CORRECT APPROACH:
    To actually trigger a re-render in this case, create a new object and pass it to the state setting function:
    onPointerMove={e => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
    }}

    Local mutation is fine, for example, below code is fine,
    const nextPosition = {};
    nextPosition.x = e.clientX;
    nextPosition.y = e.clientY;
    setPosition(nextPosition);
    
*/
export default function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={(e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      }}
      style={{
        position: "relative",
        backgroundColor: "yellow",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}
