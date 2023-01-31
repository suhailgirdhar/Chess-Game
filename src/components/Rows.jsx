import React from "react";

const images = [
  "rook",
  "knight",
  "bishop",
  "king",
  "queen",
  "bishop",
  "knight",
  "rook",
];

function RowOdd(props) {
  const text = document.getElementsByClassName("box").innerHTML;

  let classes = ["box", props.innerHTML && "piece"].join(" ");

  return (
    <div className="row row-odd">
      {images.map((image, index) => (
        <div key={index} className={classes}>
          {(props.innerHTML === "start" || props.innerHTML === "end") && image}

          {(props.innerHTML === "startPawn" || props.innerHTML === "endPawn") &&
            "Pawn"}
        </div>
      ))}
    </div>
  );
}

function RowEven(props) {
  const text = document.getElementsByClassName("box").innerHTML;

  let classes = ["box", props.innerHTML && "piece"].join(" ");

  return (
    <div className="row row-even">
      {images.map((image, index) => (
        <div key={index} className={classes}>
          {(props.innerHTML === "start" || props.innerHTML === "end") && image}

          {(props.innerHTML === "startPawn" || props.innerHTML === "endPawn") &&
            "Pawn"}
        </div>
      ))}
    </div>
  );
}

export { RowOdd, RowEven };
