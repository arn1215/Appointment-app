import React from "react";
import { Tile } from '../../components/tile/Tile'

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};
