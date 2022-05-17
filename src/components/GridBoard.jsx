import React from 'react';
import { GridSquare } from './GridSquare';
import { useSelector } from 'react-redux';
import { shapes } from '../utils';

export const GridBoard = (props) => {
  const game = useSelector((state) => state.game);
  const { grid, shape, rotation, x, y, isRunning, speed } = game;
  const block = shapes[shape][rotation];
  const blockColor = shape;
  //map through our rows
  const gridSquares = grid.map((rowArray, row) => {
    //map through cols
    return rowArray.map((square, col) => {
      //find/define block's position on the game grid (on both x and y axis)
      //We can do this by substracting the x and y position from the column/row
      const blockX = col - x;
      const blockY = row - y;
      let color = square;
      //Map our current block as it falls through the positions on the grid
      if (
        blockX >= 0 &&
        blockX < block.length &&
        blockY >= 0 &&
        blockY < block.length
      ) {
        color = block[blockY][blockX] === 0 ? color : blockColor;
      }
      //each block gets a uuid (unique key)
      const k = row * grid[0].length + col;
      //generate a grid square
      return <GridSquare key='k' color={color} />;
    });
  });

  return <div className='grid-board'>{gridSquares}</div>;
};
