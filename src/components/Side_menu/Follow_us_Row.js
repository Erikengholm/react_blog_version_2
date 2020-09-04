import React from 'react'
import FollowUsIcon from  './Follow_Us_Icon'
import './style_side_menu.css'
import Row from 'react-bootstrap/Row'
function Follow_us_Row(props) {
    const row_id = props.number;
    switch(row_id){
        case 1:
        return <Row>
                    <FollowUsIcon path="https://www.youtube.com//" icon="Youtube.png"/>
                    <FollowUsIcon path={"https://www.twitter.com/"} icon="twitter.png"/>
                    <FollowUsIcon path={"https://www.facebook.com/"} icon="facebook.png"/>
                </Row>
    
        case 2:   
        return <Row>
                    <FollowUsIcon path={"https://www.instagram.com/"} icon={"insta.png"}/>
                    <FollowUsIcon path={"https://www.gmail.com/"} icon={"gmail.jpg"}/>
                    <FollowUsIcon path={"https://www.reddit.com/"} icon={"reddit.jpg"}/>
                </Row>
        default:return <Row><p>hej</p></Row>
    }
}
export default Follow_us_Row