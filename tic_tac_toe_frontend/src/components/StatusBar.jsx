import React from 'react';

export default function StatusBar({ currentPlayer, winner, isDraw }) {
  let message = `Next: ${currentPlayer}`;
  let mode = 'info';

  if (winner) {
    message = `Winner: ${winner}`;
    mode = 'success';
  } else if (isDraw) {
    message = 'Draw!';
    mode = 'warning';
  }

  return (
    <div className={`status status-${mode}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}
