import React from 'react';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ShopPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems="center" mt={4}>
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Shop Profile</Typography>
          <Typography variant="body1">Artist/Seller profile and product management will be here.</Typography>
          <Button variant="text" sx={{ mt: 2 }} onClick={() => navigate('/')}>Back to Home</Button>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ShopPage; 