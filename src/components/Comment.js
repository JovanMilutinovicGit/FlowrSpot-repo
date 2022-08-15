import React from "react";
import "../styles/Comment.css";
import profileImage from "../assets/profile-holder.png";
const Comment = () => {
  return (
    <div className="comment">
      <div className="userAndTimePost">
        <div className="userImg">
          <img src={profileImage} width="40px" />
        </div>
        <div className="typeAndTimePost">
          <span className="typeFlowr">Balcony Flower</span>
          <span className="time">4 days ago</span>
        </div>
      </div>
      <div className="commentContent">
        <p>
          So strongly and metaphysically did I conceive of my situation then,
          that while earnestly watching his motions, I seemed distinctly to
          perceive that my own individuality was now merged in a joint stock
          company of two; that my free will had received a mortal wound; and
          that another's mistake or misfortune might plunge innocent me into
          unmerited disaster and death.
        </p>
      </div>
    </div>
  );
};

export default Comment;
