import React from "react";
import { RowOdd, RowEven } from "./Rows.jsx";
import SetId from "./SetId.jsx";
import Move from "./Move.jsx";
import { Hint } from "./Hint.jsx";
import { ResetClass, ResetBackground } from "./Reset.js";

const Game = React.createContext();

function App() {
  const [game, setGame] = React.useState({
    start: false,
    selectedColor: "",
    availableColor: "",
  });

  const [selectedBox, setSelectedBox] = React.useState("");
  const [availableBoxList, setAvailableBoxList] = React.useState([]);
  const [remain, setRemain] = React.useState([]);
  const prevSelectedBox = React.useRef("");
  const prevAvailableBoxList = React.useRef([]);

  React.useEffect(() => {
    ResetClass(availableBoxList);

    const SelectedBox = selectedBox;

    if (selectedBox) {
      const div = document.getElementById(selectedBox);
      !div.classList.contains("selected") &&
        (div.style.backgroundColor = game.selectedColor);
    }

    const column = SelectedBox.slice(0, 1);

    const row = SelectedBox.slice(1, 2);

    const array = [];

    if (row === "2") {
      for (let i = 1; i < 3; i++) {
        array.push(column + (Number(row) + i));
      }
    } else if (row === "7") {
      for (let i = 1; i < 3; i++) {
        array.push(column + (Number(row) - i));
      }
    }

    setAvailableBoxList(array);
  }, [selectedBox]);

  React.useEffect(() => {
    prevSelectedBox.current = selectedBox;

    prevAvailableBoxList.current = availableBoxList;

    for (let boxId of remain) {
      document.getElementById(boxId).innerHTML = "";
    }

    // for (let boxId of prevAvailableBoxList.current) {
    //   document.getElementById(boxId).innerHTML = "";
    // }
  }, [selectedBox]);

  SetId();

  function StartGame() {
    setGame((prevValue) => ({
      start: !prevValue.start,
      selectedColor: "yellow",
      availableColor: "lightgreen",
    }));
  }

  async function HandleClick(event) {
    if (game.start) {
      if (event.target.id) {
        const targetElementWithId = document.getElementById(event.target.id);

        if (targetElementWithId) {
          if (targetElementWithId.innerHTML) {
            const boxId = targetElementWithId.id;

            // if (availableBoxList.length !== 0) {
            //   ResetClass(availableBoxList);
            // }

            if (prevSelectedBox.current) {
              ResetBackground(prevSelectedBox.current);
            }

            if (boxId !== selectedBox) setSelectedBox(boxId);
          }

          if (!targetElementWithId.innerHTML) {
            if (prevSelectedBox.current) {
              ResetBackground(prevSelectedBox.current);
            }
            setRemain(availableBoxList);
            setSelectedBox("");
          }

          if (
            targetElementWithId.innerHTML &&
            targetElementWithId.firstElementChild
          ) {
            const targetClass =
              targetElementWithId.firstElementChild.getAttribute("class");

            if (targetClass === "child") {
              if (prevSelectedBox.current) {
                const moveFrom = document.getElementById(
                  prevSelectedBox.current
                );

                const moveTo = targetElementWithId;

                moveTo.innerHTML = moveFrom.innerHTML;

                moveFrom.innerHTML = "";

                const index = availableBoxList.indexOf(moveTo.id);

                const resultantList = availableBoxList
                  .slice(0, index)
                  .concat(
                    availableBoxList.splice(
                      index + 1,
                      availableBoxList.length + 1
                    )
                  );

                setRemain(resultantList);

                setSelectedBox("");
              }
            }
          }
        }
      }

      if (event.target.className === "child") {
        if (prevSelectedBox.current) {
          const parent = event.target.parentElement;
          const parentIndex = availableBoxList.indexOf(parent.id);

          const resultantList = availableBoxList
            .slice(0, parentIndex)
            .concat(
              availableBoxList.splice(
                parentIndex + 1,
                availableBoxList.length + 1
              )
            );

          setRemain(resultantList);

          const moveFrom = document.getElementById(prevSelectedBox.current);

          const moveTo = parent;

          moveTo.innerHTML = moveFrom.innerHTML;

          moveFrom.innerHTML = "";

          setSelectedBox("");
        }
      }
    }
  }

  return (
    <div>
      <Game.Provider value={{ game, selectedBox, availableBoxList }}>
        <div className="main" onClick={HandleClick}>
          <h1>Chess</h1>
          <Hint />
          <Move />

          <button onClick={StartGame}>
            {game.start ? "Pause" : "Click to Play"}
          </button>

          <div className="board">
            <RowOdd innerHTML="start" />

            <RowEven innerHTML="startPawn"></RowEven>

            <RowOdd />
            <RowEven />
            <RowOdd />
            <RowEven />
            <RowOdd innerHTML="endPawn" />
            <RowEven innerHTML="end" />
          </div>
        </div>
      </Game.Provider>
    </div>
  );
}

export default App;
export { Game };
