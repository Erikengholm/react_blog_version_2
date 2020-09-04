import React from "react";
import FollowUsIcon from "./FollowUsIcon";
import "./style.css";
import Row from "react-bootstrap/Row";

function FollowUsRow(props) {
  switch (props.number) {
    case 1:
      return (
        <Row>
          <FollowUsIcon path="https://www.youtube.com//" icon="Youtube.png" />
          <FollowUsIcon path={"https://www.twitter.com/"} icon="twitter.png" />
          <FollowUsIcon
            path={"https://www.facebook.com/"}
            icon="facebook.png"
          />
        </Row>
      );

    case 2:
      return (
        <Row>
          <FollowUsIcon
            path={"https://www.instagram.com/"}
            icon={"insta.png"}
          />
          <FollowUsIcon path={"https://www.gmail.com/"} icon={"gmail.jpg"} />
          <FollowUsIcon path={"https://www.reddit.com/"} icon={"reddit.jpg"} />
        </Row>
      );
    default:
      return (
        <Row>
          <p></p>
        </Row>
      );
  }
}
export default FollowUsRow;
