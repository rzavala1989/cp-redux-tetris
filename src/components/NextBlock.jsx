import React from 'react';
import { GridSquare } from './GridSquare';

export const NextBlock = (props) => {
  const box = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
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
