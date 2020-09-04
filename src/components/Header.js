import React from "react";
const Header = (props) => (
  <header>
    {props.user === "" && <h1>guest blogg</h1>}
    {props.user !== "" && <h1>{props.user} blogg</h1>}
  </header>
);

export default Header;
