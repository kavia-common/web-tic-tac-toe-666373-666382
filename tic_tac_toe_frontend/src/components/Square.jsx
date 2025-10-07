import React from 'react';

export default function Square({ value, onClick, isWinning }) {
  const aria = value ? `Square with ${value}` : 'Empty square';
  return (
    <button
      className={`square ${isWinning ? 'square-winning' : ''}`}
      onClick={onClick}
      aria-label={aria}
    >
      {value}
    </button>
  );
}
