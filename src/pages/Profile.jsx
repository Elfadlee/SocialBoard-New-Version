import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Grid
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Post from '../components/Post';
import { useApp } from '../context/useApp';

function Profile() {
  const { userId } = useParams();
  const { user, getUserById, getPostsByUserId } = useApp();
  
  // If userId is provided, show that user's profile, otherwise show current user's profile
  const profileUser = userId ? getUserById(parseInt(userId)) : user;
  const userPosts = getPostsByUserId(profileUser?.id);

  const formatJoinDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  if (!profileUser) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" color="text.secondary">
          User not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      {/* Profile Header Card */}
      <Card sx={{ mb: 3, boxShadow: 2 }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
            <Avatar
              src={profileUser.avatar}
              alt={profileUser.name}
              sx={{ width: 120, height: 120, mb: 2 }}
            />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {profileUser.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              @{profileUser.username}
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
            {profileUser.bio}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 2 }}>
            <CalendarTodayIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              Joined {formatJoinDate(profileUser.joinedDate)}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={2} justifyContent="center">
            <Grid size={{ xs: 4 }} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {userPosts.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Posts
              </Typography>
            </Grid>
            <Grid size={{ xs: 4 }} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {profileUser.followers}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Followers
              </Typography>
            </Grid>
            <Grid size={{ xs: 4 }} sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {profileUser.following}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Following
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* User's Posts */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
        Posts
      </Typography>
      
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))
      ) : (
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
          No posts yet.
        </Typography>
      )}
    </Box>
  );
}

export default Profile;
