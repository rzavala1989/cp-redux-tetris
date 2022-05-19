import React from 'react';
import { useSelector } from 'react-redux';

export const Modal = () => {
  const isRunning = useSelector((state) => state.game.isRunning);
  const isGameOver = useSelector((state) => state.game.isGameOver);

  let message = '';
  let isHidden = 'hidden';

  if (isGameOver) {
    message = 'Game Over';
    isHidden = '';
  } else if (!isRunning) {
    message = 'Pause';
    isHidden = '';
  }

  return (
    <div className={`modal ${isHidden}`}>
      <h1>{message}</h1>
    </div>
  );
};
