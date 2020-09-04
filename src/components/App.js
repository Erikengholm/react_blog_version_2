import React, { useState } from "react";
import CarList from "./Cars/";
import "../Style/style.css";
import Menu from "./Menu/";
import SidoMenu from "./SideMenu";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import LogIn from "./LogIn";
import { userContext } from "./UserContext";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  
   const [isLoggedIn, setLogin] = useState(false);
  const [user, setUser] = useState("");
  const value = { user, setUser };

  return (
    <div>
      <div id="background-Image">
        <userContext.Provider value={value}>
          <Menu showLogin={setLogin} />
          <Header user={user} />
          <LogIn isLoggedIn={isLoggedIn} showLogin={setLogin} />
        </userContext.Provider>
        <Container>
          <Row>
            <CarList />
            <SidoMenu />
          </Row>
        </Container>

        <Footer />
      </div>
    </div>
  );
};
export default App;
