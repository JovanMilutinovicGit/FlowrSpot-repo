/* eslint-disable react/prop-types */
import React from "react";
import "../styles/SightingCard.css";
import CardDetail from "./CardDetail.js";

const SightingCard = ({
  id,
  name,
  description,
  picture,
  likes,
  comments,
  user,
  flowerPic,
  user_id,
}) => {
  return (
    <div className="SightingCard">
      <div className="cardImage">
        <img src={flowerPic} />
        <div className="location">
          <i className="fa fa-map-marker"></i>
          <span>San Francisco, US</span>
        </div>
      </div>
      <div className="cardDetail">
        <CardDetail
          key={id}
          id={id}
          name={name}
          desc={description}
          pic={picture}
          likes={likes}
          comments={comments}
          user={user}
          user_id={user_id}
        />
      </div>
    </div>
  );
};
export default SightingCard;
