import React from 'react';

export const GridSquare = ({ color }) => {
  const classes = `grid-square color-${color}`;

  return <div className={classes} />;
};
