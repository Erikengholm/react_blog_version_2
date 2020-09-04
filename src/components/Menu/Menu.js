import React, { useContext } from "react";
import { userContext } from "../UserContext";
import MenuButton from "./MenuButton";
import "./style.css";
const Menu = (props) => {
  const { user, setUser } = useContext(userContext);
  let number = 1;

  return (
    <div id="main-Menu">
      <MenuButton number={number} />
      <MenuButton number={++number} />
      <MenuButton number={++number} />
      <MenuButton number={++number} />
      {user === "" && (
        <MenuButton number={++number} showLogin={props.showLogin} />
      )}
      {user !== "" && <MenuButton number={(number = 6)} showLogin={setUser} />}
    </div>
  );
};
export default Menu;
