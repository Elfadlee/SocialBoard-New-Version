import { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Box,
  IconButton
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';
import { useApp } from '../context/useApp';

function CreatePost() {
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);
  const { user, addPost } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content.trim(), imageUrl || null);
      setContent('');
      setImageUrl('');
      setShowImageInput(false);
    }
  };

  return (
    <Card sx={{ mb: 3, boxShadow: 2 }}>
      <CardContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
            <Avatar src={user.avatar} alt={user.name} />
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              variant="outlined"
            />
          </Box>
          
          {showImageInput && (
            <TextField
              fullWidth
              size="small"
              placeholder="Enter image URL (optional)"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              variant="outlined"
              sx={{ ml: 7 }}
            />
          )}
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: 7 }}>
            <IconButton
              color={showImageInput ? 'primary' : 'default'}
              onClick={() => setShowImageInput(!showImageInput)}
              aria-label="Add image"
            >
              <ImageIcon />
            </IconButton>
            <Button
              type="submit"
              variant="contained"
              disabled={!content.trim()}
              endIcon={<SendIcon />}
            >
              Post
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CreatePost;
