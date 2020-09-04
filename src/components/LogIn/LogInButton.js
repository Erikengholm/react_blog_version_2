import React, { useContext } from "react";
import { userContext } from "../UserContext";
import Button from "@material-ui/core/Button";

function LogButton(props) {
  const { setUser } = useContext(userContext);

  if (props.first) {
    return (
      <Button
        onClick={() => setUser(props.text)}
        variant="contained"
        color="primary"
      >
        Logga in
      </Button>
    );
  } else {
    return (
      <Button
        onClick={() => props.showLogin(false)}
        variant="contained"
        color="secondary"
      >
        Avbryt
      </Button>
    );
  }
}

export default LogButton;
