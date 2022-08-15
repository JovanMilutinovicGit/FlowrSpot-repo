import React from "react";
import "../styles/CardDetail.css";
import { Link } from "react-router-dom";
import userImage from "../assets/profile-holder.png";
import commentIcon from "../assets/pl-icon-comment.png";
import favIcon from "../assets/pl-icon-favorite.png";
const CardDetail = () => {
  return (
    <div>
      <div className="cardDetail">
        <div className="imageAndName">
          <div className="imageUser">
            <img src={userImage} width="40px" />
          </div>
          <div className="nameUser">
            <span className="s1">Balcony flower</span>
            <span className="s2">by Adam Moore</span>
          </div>
        </div>
        <div className="descOfFlower">
          <p>
            Platycodon grandiflorus (from Ancient Greek πλατύς "wide" and κώδων
            "bell") is a species of herbaceous flowering perennial plant of the
            …
          </p>
        </div>
        <div className="commentsAndFav">
          <div className="comments">
            <Link to="/sightingDetail" className="com">
              <img src={commentIcon} width="15px" />
              <span>18 comments</span>
            </Link>
          </div>
          <div className="favorites">
            <img src={favIcon} width="15px" />
            <span>17 favorites</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
