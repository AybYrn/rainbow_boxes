import Boxes from "./boxes.js";
import Box from "./Box.js";
import "./App.css";
import React from "react";

export default function App() {
  const [squares, setSquare] = React.useState(Boxes);

  function toggleBox(id) {
    setSquare((prevVal) => {
      return prevVal.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square
      })
    })
  }

  const box = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={() => toggleBox(square.id)} />
  ));

  return <>{box}</>;
}
