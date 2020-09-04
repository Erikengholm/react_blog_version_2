import React from 'react'
import './style_side_menu.css'

function Sido_menu_holder(props) {
  
  if (props.number === 1) {
    return<div className="card">
            <h2>Om Oss</h2>
            <img src={"/Bilder/man_i_bil.jpg"} alt="oss"/>
          </div>
    }
    
    else{
      return<div className="card">
              <h3>Bilar 2020</h3>
              <img src={"/Bilder/lamborgini.jpg"} alt="populära"/>
            </div>
    }
  }
export default Sido_menu_holder