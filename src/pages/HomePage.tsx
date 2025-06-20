import React from 'react';
import { Box, Typography, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';

const heroBg = `linear-gradient(120deg, rgba(25,118,210,0.85) 0%, rgba(255,179,0,0.7) 100%), url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80')`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: heroBg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: 3,
        boxShadow: 3,
        mt: 2,
        mb: 4,
      }}
    >
      <Box
        sx={{
          bgcolor: 'rgba(255,255,255,0.92)',
          px: { xs: 2, sm: 6 },
          py: { xs: 4, sm: 6 },
          borderRadius: 3,
          boxShadow: 2,
          minWidth: { xs: '90vw', sm: 500, md: 700 },
          maxWidth: 900,
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" fontWeight={700} color="primary.main" gutterBottom fontFamily="Montserrat, Arial">
          Welcome to Blend Lumina
        </Typography>
        <Typography variant="h5" color="text.secondary" mb={4}>
          Discover, trade, and request unique artworks from talented artists.
        </Typography>
        <Stack direction={isMobile ? 'column' : 'row'} spacing={3} justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<BrushIcon />}
            sx={{ fontWeight: 700, px: 4, py: 1.5, fontSize: 20, boxShadow: 2, mb: isMobile ? 2 : 0, borderRadius: 8, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}
            onClick={() => navigate('/artworks')}
          >
            Browse Artworks
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ fontWeight: 600, px: 3, py: 1.5, fontSize: 18, borderRadius: 8 }}
            onClick={() => navigate('/custom-request')}
          >
            Custom Request
          </Button>
          <Button
            variant="text"
            color="primary"
            size="large"
            startIcon={<LibraryBooksIcon />}
            sx={{ fontWeight: 600, px: 3, py: 1.5, fontSize: 18, borderRadius: 8 }}
            onClick={() => navigate('/blogs')}
          >
            Read Blogs
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default HomePage; 