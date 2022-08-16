import React from "react";
import Map from "../components/Map.js";
import "../styles/SighttingDetail.css";
import image from "../assets/cardImage.png";
import CardDetail from "../components/CardDetail.js";
import CommentsList from "../components/CommentsList.js";
const SightingDetail = () => {
  return (
    <div className="sightingDetail">
      <div className="mapView">
        <Map />
      </div>
      <div className="commentSection">
        <div className="commentSection-1">
          <div className="aboutSighting">
            <div className="imageFlower">
              <img src={image} />
            </div>
            <div className="userAndDesc">
              <CardDetail />
            </div>
          </div>
        </div>
        <div className="commentSection-2">
          <div className="numberCommentsAndBtn">
            <div className="inner">
              <span>14 comments</span>
              <button>Add Comment</button>
            </div>
          </div>
          <div>
            <CommentsList />
          </div>
        </div>
        <div className="commentPublish">
          <div className="commentInput">
            <input />
          </div>
          <div className="publishBtn">
            <button>Publish comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SightingDetail;
