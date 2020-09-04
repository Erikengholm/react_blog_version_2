import React,{useContext} from 'react'
import {userContext} from '../UserContext';
import MenuButton from './MenuButton'
import './style_menu.css'

const Menu = (props) =>{
   const { user, setUser } = useContext(userContext);
   
return(
<div id="aaa">
      <MenuButton number={1}/>
      <MenuButton number={2}/>
      <MenuButton number={3}/>
      <MenuButton number={4}/>
      {user=== "guest" &&
         <MenuButton number={5} showLogin={props.showLogin}/>
      }
       {user!== "guest" &&
         <MenuButton number={6} showLogin={setUser}/>
      }
   </div>
);}
export default Menu 