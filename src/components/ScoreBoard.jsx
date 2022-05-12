import React from 'react';

export const ScoreBoard = ({ score }) => {
  return (
    <div className='score-board'>
      <div>Score: {score}</div>
      <div>Level: 1</div>
      <button className='score-board-button' onClick={(e) => {}}>
        Pause/Play
      </button>
      <button className='score-board-button' onClick={(e) => {}}>
        Restart
      </button>
    </div>
  );
};
