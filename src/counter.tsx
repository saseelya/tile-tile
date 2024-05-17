import React, { useEffect } from "react";
import { TileType } from "./types/interfaces";

interface CounterProps {
    tiles: TileType[]
    counter: number
    counterCallback: Function
  }

export const Counter: React.FC<CounterProps> = ({ tiles, counter, counterCallback }) => {
    console.log('counter tiles', tiles);

    useEffect(() => {
        chrome.storage.local.get(
            {
                storageCounter: 0,
            },
            (items) => {
                counterCallback(items.storageCounter)
            }
        );
    }, []);

    return (
        <span>
            Number of tile resets: {counter}
        </span>
    );
};
