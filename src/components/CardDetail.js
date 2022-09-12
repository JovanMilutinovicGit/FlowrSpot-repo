/* eslint-disable react/prop-types */
import React from "react";
import "../styles/CardDetail.css";
import { Link } from "react-router-dom";
import userImage from "../assets/profile-holder.png";
import commentIcon from "../assets/pl-icon-comment.png";
import favIcon from "../assets/pl-icon-favorite.png";
import { connect } from "react-redux";

const CardDetail = ({ id, name, desc, likes, comments, user }) => (
  <div className="cardDetail">
    <div className="imageAndName">
      <div className="imageUser">
        <img src={userImage} width="40px" />
      </div>
      <div className="nameUser">
        <span className="s1">{name}</span>
        <span className="s2">by {user}</span>
      </div>
    </div>
    <div className="descOfFlower">
      <p>{desc}</p>
    </div>
    <div className="commentsAndFav">
      <div className="comments">
        <Link to={`/sightingDetail/${id}`} className="com">
          <img src={commentIcon} width="15px" />
          <span>{comments} comments</span>
        </Link>
      </div>
      <div className="favorites">
        <img src={favIcon} width="15px" />
        <span>{likes} favorites</span>
      </div>
    </div>
  </div>
);

const mapStateToProps = ({ sightings }) => ({ sighting: sightings });

export default connect(mapStateToProps)(CardDetail);
