import React, { useContext } from "react";
import { Game } from "./app.jsx";

function Move() {
  const state = useContext(Game);

  // const moveFromElement = document.getElementById(state.selectedBox);
  // const moveToElement = document.getElementById();
  // console.log("moveFromElement", moveFromElement);
  // // console.log("moveFromElement", moveFromElement);
  // // console.log("moveToElement", moveToElement);

  // moveToElement.innerHTML = await moveFromElement.innerHTML;
  // moveFromElement.innerHTML = "";

  // return <p>{gameStatus.selectedColor}</p>;
}

export default Move;
