import { useState } from "react";

function Square({ value, onSquareClick }) {
  //As value is being received as parameter, no need to keep track of state here
  /*const [value, setValue] = useState(null);

  function handleClick() {
    //console.log("clicked!");
    setValue("X");
  }*/

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function calculateWinner(squares) {
  if (squares == null) {
    return null;
  }

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function Board({ xIsNext, squares, onPlay }) {
  const xPlayer = "X",
    oPlayer = "O";

  //const [xIsNext, setXIsNext] = useState(true);

  //Array(9).fill(null) creates an array with nine elements and sets each of them to null.
  //const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index) {
    //if square value is already set to X or O (not null), return - no need to set value to this square again
    if (squares[index] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[index] = xPlayer;
    } else {
      nextSquares[index] = oPlayer;
    }

    onPlay(nextSquares);
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
  }

  var winnerSquare = calculateWinner(squares);
  let status;
  if (winnerSquare) {
    //console.log("The game is won by: " + winnerSquare);
    status = "Winner: " + winnerSquare;
  } else {
    status = "Next Player: " + (xIsNext ? xPlayer : oPlayer);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);

  //Notice how [Array(9).fill(null)] is an array with a single item, which itself is an array of 9 nulls.
  const [history, setHistory] = useState([Array(9).fill(null)]); // useState(Array(9).fill(null));
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    //TODO
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove){
    //TODO
  }

  const moves = history.map((squares, move) => {
    let description;
    if(move > 0) {
      description = `Go to move #${move}`;
    }else{
      description = `Go to game start`;
    }

    return (
      <li key={move}>
        <button onClick={()=> jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}
