import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack, IconButton } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const mainNavLinks = [
  { label: 'Artworks', to: '/artworks' },
  { label: 'Custom Request', to: '/custom-request' },
  { label: 'Orders', to: '/orders' },
  { label: 'Shop', to: '/shop/1' },
  { label: 'Blogs', to: '/blogs' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  return (
    <AppBar position="fixed" elevation={2} color="inherit" sx={{ bgcolor: 'background.paper' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo and Brand */}
        <Box display="flex" alignItems="center">
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', mr: 2 }}>
            {/* Artistic SVG logo placeholder */}
            <Box sx={{ width: 32, height: 32, mr: 1 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#1976d2" />
                <path d="M10 22L22 10" stroke="#ffb300" strokeWidth="3" strokeLinecap="round" />
                <ellipse cx="16" cy="16" rx="6" ry="10" fill="#fff" fillOpacity="0.2" />
              </svg>
            </Box>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, fontFamily: 'Montserrat, Arial' }}>
              Blend Lumina
            </Typography>
          </Box>
        </Box>
        {/* Main Navigation */}
        <Stack direction="row" spacing={2} alignItems="center">
          {mainNavLinks.map((link) => (
            <Button
              key={link.to}
              color={location.pathname.startsWith(link.to) ? 'primary' : 'inherit'}
              component={RouterLink}
              to={link.to}
              sx={{
                fontWeight: 600,
                borderBottom: location.pathname.startsWith(link.to) ? 2 : 0,
                borderColor: 'primary.main',
                borderRadius: 0,
                px: 2,
                textTransform: 'none',
                fontFamily: 'Montserrat, Arial',
              }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
        {/* Auth Actions */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            component={RouterLink}
            to="/login"
            color="primary"
            variant="outlined"
            startIcon={<LoginIcon />}
            sx={{ borderRadius: 8, fontWeight: 600, textTransform: 'none' }}
          >
            Login
          </Button>
          <Button
            component={RouterLink}
            to="/register"
            color="secondary"
            variant="contained"
            startIcon={<PersonAddIcon />}
            sx={{ borderRadius: 8, fontWeight: 600, textTransform: 'none' }}
          >
            Register
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 