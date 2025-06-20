import React from 'react';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CustomRequestPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems="center" mt={4}>
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Custom Request</Typography>
          <Typography variant="body1">Submit your custom artwork request here.</Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => alert('Request submitted!')}>Submit Request (Demo)</Button>
          <Button variant="text" sx={{ mt: 1 }} onClick={() => navigate('/')}>Back to Home</Button>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default CustomRequestPage; 