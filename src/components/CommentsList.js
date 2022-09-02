import React from "react";
import Comment from "./Comment.js";
import { connect } from "react-redux";
import { fetchComments } from "../actions/Index.js";

class CommentsList extends React.Component {
  componentDidMount() {
    this.props.fetchComments(this.props.params.id);
  }
  render() {
    const listOfComments = this.props.commentsSighting.map((comment) => {
      return <Comment key={comment.id} />;
    });
    return (
      <div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => {
  return { commentsSighting: Object.values(comments) };
};

export default connect(mapStateToProps, { fetchComments })(CommentsList);
