import React from 'react'
import './style_side_menu.css'
import Col from 'react-bootstrap/Col'

const Follow_us_icon = ({path ,icon}) =>(
    <Col>
         <a href={path}>
            <img src={"/Bilder/"+icon} className="icon_img" alt={icon}/>
         </a>
    </Col>
);
export default Follow_us_icon