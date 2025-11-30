import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Avatar,
  Typography,
  Grid
} from '@mui/material';
import { useApp } from '../context/useApp';

function Users() {
  const { users } = useApp();
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
        All Users
      </Typography>

      <Grid container spacing={2}>
        {users.map((user) => (
          <Grid key={user.id} size={{ xs: 12, sm: 6 }}>
            <Card sx={{ boxShadow: 2 }}>
              <CardActionArea onClick={() => navigate(`/profile/${user.id}`)}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    sx={{ width: 60, height: 60 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      @{user.username}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {user.followers} followers · {user.following} following
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Users;
