import React from 'react';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductDetailPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems="center" mt={4}>
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Artwork Detail</Typography>
          <Typography variant="body1">This is a sample artwork detail page.</Typography>
          <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate('/artworks')}>Back to Artworks</Button>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ProductDetailPage; 