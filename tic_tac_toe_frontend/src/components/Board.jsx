import React from 'react';
import Square from './Square';

export default function Board({ squares, winningLine = [], onSquareClick }) {
  function renderSquare(i) {
    const isWinning = winningLine?.includes(i);
    return (
      <Square key={i} value={squares[i]} onClick={() => onSquareClick(i)} isWinning={isWinning} />
    );
  }

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe board">
      {[0,1,2].map(r => (
        <div className="board-row" role="row" key={r}>
          {[0,1,2].map(c => renderSquare(r*3 + c))}
        </div>
      ))}
    </div>
  );
}
