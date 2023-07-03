import React, { useState } from 'react';
import PostList from './PostList';
import './Feed.css';
import useLocalStorage from 'use-local-storage';

const Feed = () => {
  const [posts, setPosts] = useLocalStorage('posts', []);
  const [newPost, setNewPost] = useState('');

  const handleNewPostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleNewPostSubmit = (event) => {
    event.preventDefault();

    if (newPost.trim() !== '') {
      const post = {
        id: Date.now(),
        content: newPost,
        likes: 0,
        comments: [],
      };

      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.likes + 1,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleCommentSubmit = (postId, comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, comment],
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handlePostDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div className="feed">
      <h2>Social Media Feed</h2>
      <form onSubmit={handleNewPostSubmit}>
        <input
          type="text"
          placeholder="Write a new post..."
          value={newPost}
          onChange={handleNewPostChange}
        />
        <button type="submit">Post</button>
      </form>
      <PostList
        posts={posts}
        onLike={handleLike}
        onCommentSubmit={handleCommentSubmit}
        onDelete={handlePostDelete}
      />
    </div>
  );
};

export default Feed;

