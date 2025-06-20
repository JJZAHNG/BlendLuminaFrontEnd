import React from 'react';
import { Card, CardContent, Typography, Button, Stack, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogListPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems="center" mt={4}>
      <Typography variant="h4" gutterBottom>Blog Posts</Typography>
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <List>
            <ListItem secondaryAction={<Button onClick={() => navigate('/blogs/1')}>Read</Button>}>
              <ListItemText primary="How to commission art" />
            </ListItem>
            <ListItem secondaryAction={<Button onClick={() => navigate('/blogs/2')}>Read</Button>}>
              <ListItemText primary="Meet our featured artist" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default BlogListPage; 