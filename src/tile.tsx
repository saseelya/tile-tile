import React from "react";
import { TileType } from "./types/interfaces";
import styled from "styled-components";

interface TileProps {
    tile: TileType
    tiles: TileType[]
    index: number
    saveCallback: Function
}

const TileStyle = styled.button`
    min-width: 25px;
    min-height: 25px;
    padding: 29px;
    background: white;
`;

const HoveredTileStyle = styled(TileStyle)`
    background: lightblue;
`;
  

export const Tile: React.FC<TileProps> = ({tile, tiles, index, saveCallback}) => {
    const handleHover = () => {
        const tilesCopy = [...tiles];
        tilesCopy[index].isHovered = true;
        saveCallback(tilesCopy);
    }

  return (
    <span>
        {tile.isHovered ? 
            <HoveredTileStyle className="hoveredTile"/> : 
            <TileStyle onMouseEnter={() => handleHover()} className="tile" />}
    </span>
  );
};
