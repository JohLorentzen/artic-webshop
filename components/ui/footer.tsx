// components/Footer.js

import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Instagram, Facebook, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton component="a" href="https://www.instagram.com/kristoffer.lorentzen/" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton component="a" href="https://www.facebook.com/loorentzen" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton component="a" href="https://www.linkedin.com/in/kristoffer-lorentzen-958a78199/" target="_blank">
                <LinkedIn />
              </IconButton>
              <IconButton component="a" href="https://www.youtube.com/@KristofferLorentzen" target="_blank">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Portfolio</Typography>
            <Link href="#" display="block" color="inherit">Nature</Link>
            <Link href="#" display="block" color="inherit">People</Link>
            <Link href="#" display="block" color="inherit">Cars</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Shop</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">About Me</Typography>
            <Link href="#" display="block" color="inherit">My Past</Link>
            <Link href="#" display="block" color="inherit">Me Now</Link>
            <Link href="#" display="block" color="inherit">Contact Me</Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
