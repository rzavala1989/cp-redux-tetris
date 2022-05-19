import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveDown, moveLeft, moveRight, rotate } from '../actions';

export const Controls = (props) => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.game.isRunning);

  return (
    <div className='controls'>
      <button
        className='control-button'
        onClick={(e) => {
          dispatch(moveLeft());
        }}
      >
        Left
      </button>
      <button
        className='control-button'
        onClick={(e) => {
          dispatch(moveRight());
        }}
      >
        Right
      </button>
      <button
        className='control-button'
        onClick={(e) => {
          dispatch(rotate());
        }}
      >
        Rotate
      </button>
      <button
        className='control-button'
        onClick={(e) => {
          dispatch(moveDown());
        }}
      >
        Down
      </button>
    </div>
  );
};
