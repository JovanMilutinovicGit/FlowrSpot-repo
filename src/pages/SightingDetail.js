/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Map from "../components/Map.js";
import "../styles/SighttingDetail.css";
import CardDetail from "../components/CardDetail.js";
import CommentsList from "../components/CommentsList.js";
import ButtonReport from "../components/buttons/ButtonReport.js";
import Button from "../components/buttons/Button.js";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSighting } from "../actions/Index.js";
import { useForm } from "react-hook-form";
import { createComment } from "../actions/Index.js";
// eslint-disable-next-line react/prop-types

const SightingDetail = ({ sightingDetail, fetchSighting, createComment }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    createComment(data, prms.id);
    console.log(data);
  };
  const prms = useParams();
  useEffect(() => {
    fetchSighting(prms.id);
  }, []);

  const {
    latitude,
    longitude,
    picture,
    id,
    name,
    description,
    likes_count,
    comments_count,
  } = sightingDetail;

  return (
    <div className="sightingDetail">
      <div className="mapView">
        <Map lat={latitude} longitude={longitude} />
        <div className="btnViewAndReport">
          <div className="btn-1">
            <Button name={"View On Google Maps"} />
          </div>
          <div className="btn-2">
            <ButtonReport />
          </div>
        </div>
      </div>
      <div className="commentSection">
        <div className="commentSection-1">
          <div className="aboutSighting">
            <div className="imageFlower">
              <img src={picture} />
            </div>
            <div className="userAndDesc">
              <CardDetail
                id={id}
                name={name}
                desc={description}
                likes={likes_count}
                comments={comments_count}
              />
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
            <CommentsList params={prms} />
          </div>
        </div>
        <form className="commentPublish" onSubmit={handleSubmit(onSubmit)}>
          <div className="commentInput">
            <input type="text" required {...register("content")} />
          </div>
          <div className="publishBtn">
            <button>Publish comment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ currentlySightingDetail }) => ({
  sightingDetail: currentlySightingDetail,
});

export default connect(mapStateToProps, { fetchSighting, createComment })(
  SightingDetail
);
