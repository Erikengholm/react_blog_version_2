import React,{useContext} from 'react'
import {userContext} from '../UserContext';
import MenuButton from './MenuButton'
import './style_menu.css'
let number=1;
const Menu = (props) =>{
   const { user, setUser } = useContext(userContext);
   
   return(
   
   <div id="aaa">
      <MenuButton number={number}/>
      <MenuButton number={++number}/>
      <MenuButton number={++number}/>
      <MenuButton number={++number}/>
      {user=== "guest" &&
         <MenuButton number={++number} showLogin={props.showLogin}/>
      }
       {user!== "guest" &&
         <MenuButton number={6} showLogin={setUser}/>
      }
   </div>
);}
export default Menu 