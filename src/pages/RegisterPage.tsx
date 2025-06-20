import React from 'react';
import { Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems="center" mt={4}>
      <Card sx={{ minWidth: 350 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Register</Typography>
          <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={() => navigate('/login')}>Register (Demo)</Button>
          <Button variant="text" fullWidth sx={{ mt: 1 }} onClick={() => navigate('/login')}>Already have an account? Login</Button>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default RegisterPage; 