//returns a random game piece/block

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// return a default game board

export const gridDefault = () => {
  const cols = 10;
  const rows = 18;
  const array = [];

  //fill this array with 18 arrays (representing our rows) containing 10 'zeros'
  for (let row = 0; row < rows; row++) {
    array.push([]);
    for (let col = 0; col < cols; col++) {
      array[row].push(0);
    }
  }

  return array;
};

//Now we build our shapes for our Tetris blocks

export const shapes = [
  // none (default)
  [
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ],

  // I shape
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
  ],

  // T shape
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],

  // L shape
  [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
  ],

  // J shape
  [
    [
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],

  // Z shape
  [
    [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
  ],

  // S shape
  [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],

    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
  ],

  // O shape
  [
    [
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  ],
];

//build random shapes
export const randomShape = () => {
  return random(1, shapes.length - 1);
};

// ROTATION = shapes[shape][rotation]
// Returns the next rotation for a shape
// rotation can't exceed the last index of the the rotations for the given shape.
export const nextRotation = (shape, rotation) => {
  return (rotation + 1) % shapes[shape].length;
};

// moving blocks
export const canMoveTo = (shape, grid, x, y, rotation) => {
  const currentShape = shapes[shape][rotation];
  for (let row = 0; row < currentShape.length; row++)
    for (let col = 0; col < currentShape[row].length; col++) {
      if (currentShape[row][col] !== 0) {
        // TODO x offset on grid - how far can i currently move left/right?
        const proposedX = col + x;
        // TODO y offset on grid - how far can i move down?
        const proposedY = row + y;
        if (proposedY < 0) {
          continue;
        }
        // Get the row on the grid
        const possibleRow = grid[proposedY];
        // Check if row exists
        if (possibleRow) {
          // Check if this column in the row is undefined, if it's off the edges, 0, and empty
          if (
            possibleRow[proposedX] === undefined ||
            possibleRow[proposedX] !== 0
          ) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  return true;
};

//add current shape to grid
export const addBlockToGrid = (shape, grid, x, y, rotation) => {
  //get the block array
  const block = shapes[shape][rotation];
  //make a copy of the grid(in its current state)
  const newGrid = [...grid];
  //map block onto the grid
  for (let row = 0; row < block.length; row++) {
    for (let col = 0; col < block[row].length; col++) {
      if (block[row][col]) {
        newGrid[row + y][col + x] = shape;
      }
    }
  }
  return newGrid;
};

// undefined or not 0 and it's occupied we can't move here.

//Generate default state of game
export const defaultState = () => {
  return {
    grid: gridDefault(),
    shape: randomShape(),
    rotation: 0,
    x: 5,
    y: -2,
    nextShape: randomShape(),
    isRunning: true,
    score: 0,
    speed: 1000,
    isGameOver: false,
  };
};
