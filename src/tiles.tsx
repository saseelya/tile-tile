import React, { useEffect, useState } from "react";
import { Tile } from "./tile";
import { TileType } from "./types/interfaces";
import styled from "styled-components";
import { DEFAULT_TILE_STATE } from "./types/enums";

interface TilesProps {
  tiles: TileType[]
  tileCallback: Function
  counterCallback: Function
}

const TilesStyle = styled.span`
  width: 325px;
  height: 325px;
  display: block;
  margin-left: 45px;
`

const hoverOffAll = (tiles: TileType[]): TileType[] => {
  tiles.forEach((tile) => tile.isHovered = false);
  return tiles;
}

export const Tiles: React.FC<TilesProps> = ({tiles, tileCallback, counterCallback}) => {
  //useEffect will set the value to DEFAULT if there is none, and to items
  //if there are some in chrome local local.
  useEffect(() => {
    chrome.storage.local.get(
      {
        storageTiles: [...DEFAULT_TILE_STATE],
      },
      (items) => {
        tileCallback([...items.storageTiles]);
      }
    );
  }, []);

  const saveTiles = (newTiles: TileType[]) => {
    chrome.storage.local.set(
      {
        storageTiles: [...newTiles],
      },
      () => {
        console.log('new tile success');
        tileCallback([...newTiles]);

        if (newTiles.every((newTile) => newTile.isHovered)) {
          chrome.storage.local.set(
            {
              storageTiles: hoverOffAll(newTiles),
            },
            () => {
              console.log('reset successfully');
              tileCallback(hoverOffAll(newTiles));
              counterCallback();
            }
          );
        }
      }
    );
  };

  return (
    <TilesStyle>
      {tiles.map((tile, key) =>
        (
          <Tile tile={tile} tiles={tiles} key={key} index={key} saveCallback={saveTiles} />
        )
      )}
    </TilesStyle>
  );
};
