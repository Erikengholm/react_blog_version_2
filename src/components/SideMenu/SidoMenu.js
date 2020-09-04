import React from "react";
import SidoMenuHolder from "./SidoMenuHolder";
import FollowUs from "./FollowUs";
import "./style.css";
const SidoMenu = () => {
  let number = 0;
  return (
    <div className="right-Side-Content">
      <SidoMenuHolder number={++number} />

      <SidoMenuHolder number={++number} />

      <FollowUs />
    </div>
  );
};
export default SidoMenu;
