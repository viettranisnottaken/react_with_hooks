import React, { useState, useRef } from "react";
import { Square } from "./square";

export const Board = () => {
  const [board, setBoard] = useState({
    squares: {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null
    },
    isNext: true
  });

  const renderSquare = key => {
    return (
      <Square
        key={key}
        value={board.squares[key]}
        onClick={() => handleClick(key)}
      />
    );
  };

  const handleClick = key => {
    let value = board.isNext ? "O" : "X";
    setBoard({
      squares: { ...board.squares, [key]: value },
      isNext: !board.isNext
    });
    console.log(board.isNext);
  };

  return (
    <div className="row">
      <div className="col-12 m-0">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="col-12 m-0">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="col-12 m-0">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
