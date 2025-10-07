import React from 'react';

export default function Controls({ onReset, disabled }) {
  return (
    <div className="controls">
      <button className="btn" onClick={onReset} aria-label="Start a new game">
        New Game
      </button>
    </div>
  );
}
