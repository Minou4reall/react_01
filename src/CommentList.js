import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          {comment}
        </div>
      ))}
    </div>
  );
};

export default CommentList;

