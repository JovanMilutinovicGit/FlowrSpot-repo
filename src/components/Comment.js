/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../styles/Comment.css";
import profileImage from "../assets/profile-holder.png";

const Comment = ({ content, user }) => (
  <div className="comment">
    <div className="userAndTimePost">
      <div className="userImg">
        <img src={profileImage} width="40px" />
      </div>
      <div className="typeAndTimePost">
        <span className="typeFlowr">{user}</span>
        <span className="time">4 days ago</span>
      </div>
    </div>
    <div className="commentContent">
      <p>{content}</p>
    </div>
  </div>
);

export default Comment;
