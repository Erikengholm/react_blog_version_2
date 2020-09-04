import React from "react";
import "./style.css";

function SidoMenuHolder(props) {
  if (props.number === 1) {
    return (
      <div className="card">
        <h2>Om Oss</h2>
        <img src={"/Bilder/omOss.jpg"} alt="oss" />
      </div>
    );
  } else {
    return (
      <div className="card">
        <h3>Bilar 2020</h3>
        <img src={"/Bilder/lamborgini.jpg"} alt="populära" />
      </div>
    );
  }
}
export default SidoMenuHolder;
