import Boxes from "./boxes.js";
import Box from "./Box.js";
import "./App.css";
import React from "react";

export default function App() {
  const [square, setSquare] = React.useState(Boxes);

  function toggleBox(){
    setSquare(prevVal => ({
      id : prevVal.id + 1,
      on : !prevVal.on
    }))
  }

  const box = Boxes.map((item) => <Box {...item} handleClick ={toggleBox}/>);

  return <>
    {box}
  </>;
}

