import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { AppStyles } from "./appStyles";
import { Main } from './main';

const Popup = () => {
  
  useEffect(() => {
    chrome.storage.local.get(
      {
          storageCounter: 0,
      },
      (items) => {
        chrome.action.setBadgeText({ text:items.storageCounter.toString() });
      }
    );
  }, []);

  return (
    <AppStyles>
      <Main />
    </AppStyles>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
