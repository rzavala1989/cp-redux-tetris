import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pause, resume, restart } from '../actions';

export const ScoreBoard = (props) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { score, isRunning, isGameOver } = game;

  return (
    <div className='score-board'>
      <div>Score: {score}</div>
      <div>Level: 1</div>
      <button
        className='score-board-button'
        onClick={(e) => {
          if (isGameOver) {
            return;
          }
          if (isRunning) {
            dispatch(pause());
          } else {
            dispatch(resume());
          }
        }}
      >
        {isRunning ? 'Pause' : 'Play'}
      </button>
      <button
        className='score-board-button'
        onClick={(e) => {
          dispatch(restart());
        }}
      >
        Restart
      </button>
    </div>
  );
};
