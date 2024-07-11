// components/Footer.js

import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  IconButton,
} from '@mui/material';
import { Instagram, Facebook, LinkedIn, YouTube, X } from '@mui/icons-material';
import { linkText } from '@/constants/text.no';

const Footer = () => {
  return (
    <Box component="footer" className="py-6 bg-customBlueDark">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              display="flex"
              alignItems="center"
              mb={2}
              className="space-x-2"
            >
              <IconButton
                component="a"
                href="https://www.instagram.com/kristoffer.lorentzen/"
                target="_blank"
                className="text-customWhite"
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.facebook.com/loorentzen"
                target="_blank"
                className="text-customWhite"
              >
                <Facebook />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/kristoffer-lorentzen-958a78199/"
                target="_blank"
                className="text-customWhite"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://x.com/krislorentzen11"
                target="_blank"
                className="text-customWhite"
              >
                <X />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.youtube.com/@KristofferLorentzen"
                target="_blank"
                className="text-customWhite"
              >
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="text-customWhite">
              {linkText.portifolio}
            </Typography>
            <Link href="#" display="block" className="text-customGray">
              {linkText.subPortifolio[0]}
            </Link>
            <Link href="#" display="block" className="text-customGray">
              {linkText.subPortifolio[1]}
            </Link>
            <Link href="#" display="block" className="text-customGray">
              {linkText.subPortifolio[2]}
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="text-customWhite">
              {linkText.shop}
            </Typography>
            <Link href="#" display="block" className="text-customGray">
              {linkText.subShop[0]}
            </Link>
            <Link href="#" display="block" className="text-customGray">
              {linkText.subShop[1]}
            </Link>
            <Link href="#" display="block" className="text-customGray">
              {linkText.subShop[2]}
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="text-customWhite">
              {linkText.aboutMe}
            </Typography>
            <Link href="#" display="block" className="text-customGray">
              {linkText.subAboutMe[0]}
            </Link>
            <Link href="#" display="block" className="text-customGray">
              {linkText.subAboutMe[1]}
            </Link>
            <Link href="#" display="block" className="text-customGray">
              {linkText.subAboutMe[2]}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
