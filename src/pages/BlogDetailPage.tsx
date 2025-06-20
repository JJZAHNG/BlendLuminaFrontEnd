import React from 'react';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BlogDetailPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems="center" mt={4}>
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Blog Post Detail</Typography>
          <Typography variant="body1">This is a sample blog post detail page.</Typography>
          <Button variant="text" sx={{ mt: 2 }} onClick={() => navigate('/blogs')}>Back to Blog List</Button>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default BlogDetailPage; 