import React, { useContext } from "react";
import { Game } from "./app.jsx";
import Move from "./Move.jsx";

export const Hint = () => {

  const state = useContext(Game);
  
  for (let boxId of state.availableBoxList) {
  
    const box = document.getElementById(boxId);
  
    if (!box.innerHTML) {
  
      const child = document.createElement("span");
  
      child.classList.add("child");
  
      box.appendChild(child);
  
    }
  }
};
