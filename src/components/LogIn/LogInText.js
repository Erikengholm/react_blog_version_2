import React from "react";

function text(props) {
  if (props.first) {
    return (
      <div className="log-In-Text">
        {" "}
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(event) => props.text(event.target.value)}
          placeholder="user namn"
        />
      </div>
    );
  } else {
    return (
      <div className="log-In-Text">
        {" "}
        <input type="password" id="lname" name="lname" placeholder="lösenord" />
      </div>
    );
  }
}

export default text;
