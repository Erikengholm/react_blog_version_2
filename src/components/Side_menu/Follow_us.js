import React from 'react'
import FollowUsRow from './Follow_Us_Row'
import './style_side_menu.css'
const Follow_us = () =>{
    let number=1
return(
    <div className="card">
        <h3>Följ oss!</h3>
        <p>Vi har många följare på Facebook och Twitter!</p>
        <FollowUsRow number={number}/>
        <FollowUsRow number={++number}/>
    </div>
);}
export default Follow_us