import {
  MOVE_RIGHT,
  MOVE_LEFT,
  PAUSE,
  RESTART,
  RESUME,
  ROTATE,
  MOVE_DOWN,
  GAME_OVER,
} from '../actions';
import {
  defaultState,
  nextRotation,
  canMoveTo,
  addBlockToGrid,
  randomShape,
} from '../utils';

const initialState = defaultState();

const gameReducer = (state = initialState, action) => {
  const { shape, grid, x, y, rotation, score, isRunning, nextShape } = state;
  switch (action.type) {
    case MOVE_RIGHT:
      //add 1 from curent position to x-axis, and check if this move is possible
      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        return { ...state, x: x + 1 };
      }
      return state;
    case MOVE_LEFT:
      //subtract 1 from current position on x-axis and check if this move is possible
      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
        return { ...state, x: x - 1 };
      }
      return state;
    case MOVE_DOWN:
      const potentialY = y + 1;
      if (canMoveTo(shape, grid, x, potentialY, rotation)) {
        //if true, move block down
        return { ...state, y: potentialY };
      }
      //if we CANT move down, place and set the block
      //make new copy of grid
      //add block to grid
      const newGrid = addBlockToGrid(shape, grid, x, y, rotation);
      //bring properties to start a new block
      const newState = defaultState();
      newState.grid = newGrid;
      //set shape to nextShape
      newState.shape = nextShape;
      //set newShape to a new random shape
      newState.nextShape = randomShape();
      newState.isRunning = isRunning;
      //check if nextShape can be displayed
      //if it cant fit on grid, then gameOver =true
      if (!canMoveTo(nextShape, newGrid, 0, 4, 0)) {
        console.log('GAME OVER!');
        newState.shape = 0;
        return { ...state, isGameOver: true };
      }
      return newState;

    case PAUSE:
      return state;
    case RESTART:
      return state;
    case RESUME:
      return state;
    case ROTATE:
      const newRotation = nextRotation(shape, rotation);
      if (canMoveTo(shape, grid, x, y, newRotation)) {
        return { ...state, rotation: newRotation };
      }
      return state;

    case GAME_OVER:
      return state;
    default:
      return state;
  }
};

export default gameReducer;
