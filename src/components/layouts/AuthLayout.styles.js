"use client";

import { styled } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';


export const LayoutContainer = styled(Grid)(({ theme }) => ({
  minHeight: '100vh',
  height: '100vh',
  width: '100vw',
  overflowY: 'auto',
  overflowX: 'hidden',
  position: 'absolute',
}));

export const LeftGrid = styled(Grid)(({ theme }) => ({
  width: '100vw',
  backgroundColor: '#FFFFFF',
  overflowX: 'hidden',
  position: 'relative',
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: theme.spacing(6),
  marginLeft: theme.spacing(3),
  marginTop: theme.spacing(7.5),
}));

export const AuthPrevImage = styled(Box)({
  maxWidth: 50,
});

export const MotorcarLogoImage = styled(Box)({
  width: '30%',
  maxWidth: 133,
});

export const CarIllustration = styled(Box)({
  maxWidth: 340,
  position: 'absolute',
  top: '63%',
  left: 0,
});