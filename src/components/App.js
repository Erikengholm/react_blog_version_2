import React, { useState} from "react";
import Car_list from './Cars/'
import '../Style/style_html.css'
import Menu from './Menu/'
import Sido_menu from './Side_menu/'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Log_in from "./Log_in/";
import {userContext} from './UserContext';
import Header from './Header'
import Footer from './Footer'


const App = () => {
   const [loggedIn, setLogin] = useState(false)
   const [user, setUser] = useState("guest")

   const value = { user, setUser };
//skapa compenent  backcover som går på och av med blur via state
// formanterra javascript bitarna i koden
// LETA OCH TA BORT ONÖDIG KOD
  
   return (
   <div>
   <div id="backcover"style={{filter: loggedIn ? "blur(5px)":"blur(0px)"}}>
   <userContext.Provider value={value}>
      <Menu showLogin={setLogin} />
      <Header user={user}/> 

   </userContext.Provider>

   <Container>
      <Row>
         <Car_list/>
         <Sido_menu/>
      </Row>
   </Container>
<Footer/>
</div>   
<userContext.Provider value={value}>
    <Log_in log={loggedIn} showLogin={setLogin}/>

   </userContext.Provider>

</div>

);}
export default App;
