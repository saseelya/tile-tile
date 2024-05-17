import React, { useState } from "react";
import { Tiles } from "./tiles";
import { Counter } from "./counter";
import { TileType } from "./types/interfaces";

export const Main = () => {
  const [tiles, setTiles] = useState<TileType[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    chrome.storage.local.set(
      {
        storageCounter: counter + 1,
      },
      () => {
        setCounter(counter + 1);
      }
    )
  }

  return (
    <>
        <Tiles tiles={tiles} tileCallback={setTiles} counterCallback={incrementCounter} />
        <Counter tiles={tiles} counter={counter} counterCallback={setCounter} />
    </>
  );
};
