import React from "react";
import FollowUsRow from "./FollowUsRow";
import "./style.css";

const FollowUs = () => {
  let number = 1;
  return (
    <div className="card">
      <h3>Följ oss!</h3>
      <p>Vi har många följare på Facebook och Twitter!</p>
      <FollowUsRow number={number} />
      <FollowUsRow number={++number} />
    </div>
  );
};
export default FollowUs;
