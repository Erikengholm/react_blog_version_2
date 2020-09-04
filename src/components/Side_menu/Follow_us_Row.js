import React from 'react'
import Follow_us_icon from  './Follow_us_icon'
import './style_side_menu.css'
import Row from 'react-bootstrap/Row'
function Follow_us_Row(props) {
    const row_id = props.number;
    switch(row_id){
        case 1:
        return <Row>
        <Follow_us_icon path="https://www.youtube.com//" icon="Youtube.png"/>
        <Follow_us_icon path={"https://www.twitter.com/"} icon="twitter.png"/>
        <Follow_us_icon path={"https://www.facebook.com/"} icon="facebook.png"/>
         </Row>
        break;
    case 2:   return <Row>
    <Follow_us_icon path={"https://www.instagram.com/"} icon={"insta.png"}/>
    <Follow_us_icon path={"https://www.gmail.com/"} icon={"gmail.jpg"}/>
    <Follow_us_icon path={"https://www.reddit.com/"} icon={"reddit.jpg"}/>
    </Row>
 break;
  }}
export default Follow_us_Row