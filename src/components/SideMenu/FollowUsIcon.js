import React from "react";
import "./style.css";
import Col from "react-bootstrap/Col";

const FollowUsIcon = ({ path, icon }) => (
  <Col>
    <a href={path}>
      <img src={"/Bilder/" + icon} className="icon-Img" alt={icon} />
    </a>
  </Col>
);
export default FollowUsIcon;
