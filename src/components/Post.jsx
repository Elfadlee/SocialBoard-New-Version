import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  TextField,
  Button,
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { useApp } from '../context/useApp';

function Post({ post }) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const { user, getUserById, toggleLike, addComment, getPostComments, hasUserLikedPost } = useApp();
  const navigate = useNavigate();

  const postAuthor = getUserById(post.userId);
  const comments = getPostComments(post.id);
  const isLiked = hasUserLikedPost(post.id);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleLike = () => {
    toggleLike(post.id);
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(post.id, newComment.trim());
      setNewComment('');
    }
  };

  const handleProfileClick = (userId) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <Card sx={{ mb: 2, boxShadow: 2 }}>
      <CardHeader
        avatar={
          <Avatar
            src={postAuthor?.avatar}
            alt={postAuthor?.name}
            sx={{ cursor: 'pointer' }}
            onClick={() => handleProfileClick(post.userId)}
          />
        }
        title={
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => handleProfileClick(post.userId)}
          >
            {postAuthor?.name}
          </Typography>
        }
        subheader={
          <Typography variant="caption" color="text.secondary">
            @{postAuthor?.username} · {formatDate(post.createdAt)}
          </Typography>
        }
      />
      
      <CardContent sx={{ pt: 0 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {post.content}
        </Typography>
      </CardContent>

      {post.image && (
        <CardMedia
          component="img"
          image={post.image}
          alt="Post image"
          sx={{ maxHeight: 400, objectFit: 'cover' }}
        />
      )}

      <CardActions disableSpacing>
        <IconButton 
          aria-label="like post"
          onClick={handleLike}
          color={isLiked ? 'error' : 'default'}
        >
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
          {post.likes}
        </Typography>
        
        <IconButton 
          aria-label="show comments"
          onClick={handleToggleComments}
        >
          <CommentIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {comments.length}
        </Typography>
      </CardActions>

      <Collapse in={showComments} timeout="auto" unmountOnExit>
        <Divider />
        <Box sx={{ p: 2 }}>
          {/* Comment input */}
          <Box
            component="form"
            onSubmit={handleSubmitComment}
            sx={{ display: 'flex', gap: 1, mb: 2 }}
          >
            <Avatar src={user.avatar} alt={user.name} sx={{ width: 32, height: 32 }} />
            <TextField
              fullWidth
              size="small"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              variant="outlined"
            />
            <Button
              type="submit"
              variant="contained"
              size="small"
              disabled={!newComment.trim()}
            >
              Post
            </Button>
          </Box>

          {/* Comments list */}
          <List sx={{ pt: 0 }}>
            {comments.map((comment) => {
              const commentAuthor = getUserById(comment.userId);
              return (
                <ListItem
                  key={comment.id}
                  alignItems="flex-start"
                  sx={{ px: 0 }}
                >
                  <ListItemAvatar>
                    <Avatar
                      src={commentAuthor?.avatar}
                      alt={commentAuthor?.name}
                      sx={{ width: 32, height: 32, cursor: 'pointer' }}
                      onClick={() => handleProfileClick(comment.userId)}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ cursor: 'pointer' }}
                          onClick={() => handleProfileClick(comment.userId)}
                        >
                          {commentAuthor?.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {formatDate(comment.createdAt)}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <Typography variant="body2" color="text.primary">
                        {comment.content}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
            {comments.length === 0 && (
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 2 }}>
                No comments yet. Be the first to comment!
              </Typography>
            )}
          </List>
        </Box>
      </Collapse>
    </Card>
  );
}

export default Post;
