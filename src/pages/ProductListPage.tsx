import React from 'react';
import { Typography, Button, Stack, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductListPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems="center" mt={4}>
      <Typography variant="h4" gutterBottom>Artworks</Typography>
      <Card sx={{ minWidth: 300, mb: 2 }}>
        <CardContent>
          <Typography variant="h6">Sample Artwork</Typography>
          <Button variant="outlined" onClick={() => navigate('/artworks/1')}>View Details</Button>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ProductListPage; 