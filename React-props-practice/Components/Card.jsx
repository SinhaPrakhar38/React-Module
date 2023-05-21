import React from "react";
import Avatar from "./Avatar";
import Para from "./Para";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img1={props.img} />
      </div>
      <div className="bottom">
        <Para />
      </div>
    </div>
  );
}

export default Card;
