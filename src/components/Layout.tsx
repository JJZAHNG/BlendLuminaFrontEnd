import React from 'react';
import { Container, Box } from '@mui/material';

const NAVBAR_HEIGHT = 64;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa' }}>
      <Box sx={{ height: NAVBAR_HEIGHT }} /> {/* Spacer for fixed navbar */}
      <Container maxWidth="lg" sx={{ pt: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout; 