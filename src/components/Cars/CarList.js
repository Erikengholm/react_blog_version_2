import React from "react";
import Cars from "./Cars";
import "./style.css";
const CarList = () => {
  let number = 0;
  return (
    <div className="left-Side-Content">
      <Cars number={number} />
      <Cars number={++number} />
      <Cars number={++number} />
    </div>
  );
};
export default CarList;
