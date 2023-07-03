import React from 'react';
import Post from './Post';

const PostList = ({ posts, onLike, onCommentSubmit, onDelete }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={onLike}
          onCommentSubmit={onCommentSubmit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PostList;
