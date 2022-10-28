/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Comment from "./Comment.js";
import { fetchComments } from "../actions/Index.js";
import { useParams } from "react-router-dom";
import "../styles/CommentsList.css";

const CommentsList = ({ comments, fetchComments }) => {
  const prms = useParams();

  useEffect(() => {
    fetchComments(prms.id);
  }, [prms.id]);

  const listOfComments = Object.values(comments).map(
    ({ content, id, user_full_name }) => {
      return <Comment key={id} content={content} user={user_full_name} />;
    }
  );

  return <div className="listOfComments">{listOfComments}</div>;
};

const mapStateToProps = ({ comments }) => ({ comments: comments });

export default connect(mapStateToProps, { fetchComments })(CommentsList);
