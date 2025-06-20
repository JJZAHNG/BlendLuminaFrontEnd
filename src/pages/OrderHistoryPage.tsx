import React from 'react';
import { Card, CardContent, Typography, Button, Stack, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderHistoryPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems="center" mt={4}>
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Order History</Typography>
          <List>
            <ListItem><ListItemText primary="Order #1 - Completed" /></ListItem>
            <ListItem><ListItemText primary="Order #2 - Pending" /></ListItem>
          </List>
          <Button variant="text" sx={{ mt: 1 }} onClick={() => navigate('/')}>Back to Home</Button>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default OrderHistoryPage; 