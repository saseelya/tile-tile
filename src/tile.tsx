import React from "react";
import { TileType } from "./types/interfaces";
import styled from "styled-components";

interface TileProps {
    tile: TileType
    tiles: TileType[]
    index: number
    saveCallback: Function
}

const TileStyle = styled.span`
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
    <>
        {tile.isHovered ? 
            // <HoveredTileStyle className="hoveredTile">
            // {/* </HoveredTileStyle>  */}
                <img src='/images/BlueSelectedTile.png' alt="selected"/>
                : 
            // <TileStyle onMouseMove={() => handleHover()} className="tile" >
            // </TileStyle>}
                <img onMouseMove={() => handleHover()} src='/images/UnselectedTile.png' alt="unselected" />}
    </>
  );
};
