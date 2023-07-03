import React, { useState } from "react";
import CommentList from "./CommentList";

const Post = ({ post, onLike, onCommentSubmit, onDelete }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      onCommentSubmit(post.id, newComment);
      setNewComment("");
    }
  };

  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className="frm">
        <button onClick={() => onLike(post.id)}>Like ({post.likes})</button>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={handleCommentChange}
        />
        <button type="submit">Comment</button>
      </form>
      <CommentList comments={post.comments} />
      <button className="dlt" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Post;
