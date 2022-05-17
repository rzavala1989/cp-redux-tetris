import React from 'react';
import { GridSquare } from './GridSquare';
import { shapes } from '../utils';
import { useSelector } from 'react-redux';

export const NextBlock = (props) => {
  const nextShape = useSelector((state) => state.game.nextShape);
  const box = shapes[nextShape][0];

  const grid = box.map((rowArr, row) => {
    return rowArr.map((square, col) => {
      return <GridSquare key={`${col}${row}`} color={square} />;
    });
  });

  return <div className='next-block'>{grid}</div>;
};

// [
//   [0,0,0,0],
//   [0,0,0,0],
//   [0,0,0,0],
//   [0,0,0,0],
// ]
