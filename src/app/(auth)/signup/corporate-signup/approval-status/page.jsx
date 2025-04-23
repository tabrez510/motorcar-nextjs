"use client";

import React from 'react';
// import withAuthLayout from '@/components/layouts/AuthLayout';
import { Box, Container, Typography } from '@mui/material';
import { LinkText } from '../signup.styles';
import {
  containerStyle,
  alertBoxStyle,
  supportTextStyle,
  headingTextStyle,
  backContainerStyle,
} from './approvalStatus.styles';

const Page = () => {
  return (
    <Box>
      <Container maxWidth="sm" sx={containerStyle}>
        <Typography variant="h5" align="center" sx={headingTextStyle}>
          Approval Status
        </Typography>
        <Box sx={alertBoxStyle}>
          <Typography sx={{ color: '#856404' }}>
            Your profile is currently under review. Please allow up to 48 hours for a decision.
          </Typography>
        </Box>
        <Typography sx={supportTextStyle} align="center">
          Need assistance? Feel free <span style={{ color: '#1976D2' }}>to contact support</span> for any queries.
        </Typography>
      </Container>

      <Box sx={backContainerStyle}>
        <Box component="img" src="/icons/back-light.svg" alt="back icon" />
        <LinkText href="/login" align="center" color="#FEC62A">
          Go Back to Login
        </LinkText>
      </Box>
    </Box>
  );
};

export default Page;
