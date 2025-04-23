"use client";

import { styled } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import {horizontalScale as hs, verticalScale as vs, moderateScale as ms} from'@/utils/scaling.js';


export const LayoutContainer = styled(Grid)(({ theme }) => ({
  minHeight: `${vs(100)}vh`,
  height: `${vs(100)}vh`,
  width: `${vs(100)}vw`,
  overflowY: 'auto',
  overflowX: 'hidden',
  position: 'absolute',
}));

export const LeftGrid = styled(Grid)(({ theme }) => ({
  width: `${vs(100)}vw`,
  backgroundColor: '#FFFFFF',
  // overflowX: 'hidden',
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
  maxWidth: `${ms(50)}px`,
});

export const MotorcarLogoImage = styled(Box)({
  width: `${hs(30)}%`,
  maxWidth: `${ms(133)}px`,
});

export const CarIllustration = styled(Box)({
  maxWidth: `${ms(340)}px`,
  position: 'absolute',
  top: `${vs(63)}%`,
  left: `${ms(0)}px`,
});
