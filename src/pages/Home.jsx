import { Typography, Box } from '@mui/material';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import { useApp } from '../context/useApp';

function Home() {
  const { posts } = useApp();

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        Home Feed
      </Typography>
      
      <CreatePost />
      
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      
      {posts.length === 0 && (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
          No posts yet. Be the first to create a post!
        </Typography>
      )}
    </Box>
  );
}

export default Home;
