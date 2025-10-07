import React, { useMemo, useState } from 'react';
import Board from './components/Board';
import StatusBar from './components/StatusBar';
import Controls from './components/Controls';
import calculateWinner from './utils/calculateWinner';

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { winner, line } = useMemo(() => calculateWinner(squares), [squares]);
  const isDraw = !winner && squares.every(Boolean);
  const currentPlayer = xIsNext ? 'X' : 'O';

  function handleSquareClick(index) {
    if (winner || squares[index]) return;
    const next = squares.slice();
    next[index] = currentPlayer;
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Tic Tac Toe</h1>
        <StatusBar currentPlayer={currentPlayer} winner={winner} isDraw={isDraw} />
        <Board squares={squares} winningLine={line} onSquareClick={handleSquareClick} />
        <Controls onReset={handleReset} disabled={!winner && !isDraw && squares.some(Boolean) === false} />
      </div>
      <footer className="footnote">Built with ❤️ using the Ocean Professional theme</footer>
    </div>
  );
}
