import React from 'react'
import SidoMenuHolder from './Sido_Menu_Holder'
import FollowUs from './Follow_Us'
import './style_side_menu.css'
const Sido_menu = () =>{
let number =0;
return (
    <div className="högerKollumn">
        <SidoMenuHolder number={++number} />

        <SidoMenuHolder number={++number}/>
        
        <FollowUs/>
    </div>
)}
export default Sido_menu