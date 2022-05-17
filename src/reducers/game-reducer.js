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
import { defaultState } from '../utils';

const initialState = defaultState();

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_RIGHT:
      return state;
    case MOVE_LEFT:
      return state;
    case PAUSE:
      return state;
    case RESTART:
      return state;
    case RESUME:
      return state;
    case ROTATE:
      return state;
    case MOVE_DOWN:
      return state;
    case GAME_OVER:
      return state;
    default:
      return state;
  }
};

export default gameReducer;
