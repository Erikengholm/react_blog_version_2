import React, { useState } from "react";
import LogInText from "./LogInText";
import "./style.css";
import LogInButton from "./LogInButton";

const LogIn = ({ isLoggedIn, showLogin }) => {
  const [title, setTitle] = useState("");
  return (
    <div
      className="blur-Overlay"
      style={{ display: isLoggedIn ? "block" : "none" }}
    >
      <div className="login">
        <div className="log-Logo">
          <img src="/Bilder/log.png" alt="logo.png" />
        </div>
        <div className="log-Input">
          <LogInText first={true} text={setTitle} />
          <LogInText first={false} />
        </div>
        <div className="log-Buttons">
          <LogInButton first={true} text={title} />
          <LogInButton first={false} showLogin={showLogin} />
        </div>
      </div>
    </div>
  );
};
export default LogIn;
