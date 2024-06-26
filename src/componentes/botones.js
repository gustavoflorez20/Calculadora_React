import React, { useState } from "react";
import "../App.css";

function Botones({ result, clickHandle, calculate, clearDisplay, borrar }) {
  return (
    <div className="contenedor">
      <div className="calc">
        <input type="text" placeholder="0" id="answer" value={result} />
        <input
          type="button"
          value={"Del"}
          className="button buton1"
          onClick={clearDisplay}
        />
        <input type="button" value={"C"} className="button" onClick={borrar} />
        <input
          type="button"
          value={"/"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"7"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"8"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"9"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"*"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"4"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"5"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"6"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"-"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"1"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"2"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"3"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"+"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"="}
          className="button buton2"
          onClick={calculate}
        />
        <input
          type="button"
          value={"0"}
          className="button"
          onClick={clickHandle}
        />
        <input
          type="button"
          value={"."}
          className="button"
          onClick={clickHandle}
        />
      </div>
    </div>
  );
}
export default Botones;
