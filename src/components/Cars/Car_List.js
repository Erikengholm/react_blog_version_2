import React from "react";
import CARS from './Car_Holder'
import './style_car.css'
const Car_list  = () => {
let number=0
return(
<div id="Main-Content" className="vänsterKollumn">
    
    <CARS number={number}/>
    <CARS number={++number}/>
    <CARS number={++number}/>

</div>
);
}
export default Car_list

