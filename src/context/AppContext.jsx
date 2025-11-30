import { useState, useMemo, useCallback } from 'react';
import { posts as initialPosts, comments as initialComments, users, currentUser } from '../data/mockData';
import { AppContext } from './useApp';

export function AppProvider({ children }) {
  const [posts, setPosts] = useState(initialPosts);
  const [comments, setComments] = useState(initialComments);
  const [user] = useState(currentUser);

  // Add a new post
  const addPost = useCallback((content, image = null) => {
    const newPost = {
      id: posts.length + 1,
      userId: user.id,
      content,
      image,
      likes: 0,
      likedBy: [],
      createdAt: new Date().toISOString()
    };
    setPosts(prevPosts => [newPost, ...prevPosts]);
  }, [posts.length, user.id]);

  // Toggle like on a post
  const toggleLike = useCallback((postId) => {
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        const isLiked = post.likedBy.includes(user.id);
        return {
          ...post,
          likes: isLiked ? post.likes - 1 : post.likes + 1,
          likedBy: isLiked 
            ? post.likedBy.filter(id => id !== user.id)
            : [...post.likedBy, user.id]
        };
      }
      return post;
    }));
  }, [user.id]);

  // Add a comment to a post
  const addComment = useCallback((postId, content) => {
    const newComment = {
      id: comments.length + 1,
      postId,
      userId: user.id,
      content,
      createdAt: new Date().toISOString()
    };
    setComments(prevComments => [...prevComments, newComment]);
  }, [comments.length, user.id]);

  // Get comments for a specific post
  const getPostComments = useCallback((postId) => {
    return comments.filter(comment => comment.postId === postId);
  }, [comments]);

  // Get user by ID
  const getUserById = useCallback((userId) => {
    return users.find(u => u.id === userId);
  }, []);

  // Get posts by user ID
  const getPostsByUserId = useCallback((userId) => {
    return posts.filter(post => post.userId === userId);
  }, [posts]);

  // Check if current user has liked a post
  const hasUserLikedPost = useCallback((postId) => {
    const post = posts.find(p => p.id === postId);
    return post ? post.likedBy.includes(user.id) : false;
  }, [posts, user.id]);

  const value = useMemo(() => ({
    posts,
    comments,
    user,
    users,
    addPost,
    toggleLike,
    addComment,
    getPostComments,
    getUserById,
    getPostsByUserId,
    hasUserLikedPost
  }), [posts, comments, user, addPost, toggleLike, addComment, getPostComments, getUserById, getPostsByUserId, hasUserLikedPost]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
