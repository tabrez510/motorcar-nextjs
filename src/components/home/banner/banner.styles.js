import { Box, Typography, styled } from '@mui/material';
import { fonts } from '@/components/ThemeRegistry/theme';

export const BannerContainer = styled(Box)(({ theme }) => ({
  width: '98%',
  left:"8px",
  height: '35vh',
  backgroundColor: '#000',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingInline: theme.spacing(7),
  gap: theme.spacing(2),
  position: 'relative',
  marginTop: theme.spacing(2),
}));

export const BannerImage = styled('img')({
  width: '15%',
});

export const ContentBox = styled(Box)({
  width: '85%',
});

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  color: theme.palette.common.white,
  fontFamily: fonts.primary,
  fontWeight: 700,
}));

export const Subtitle = styled('span')({
  fontSize: '1.8rem',
  fontWeight: 400,
});

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  color: theme.palette.common.white,
  fontWeight: 400,
  letterSpacing: 0,
  width: '70%',
  opacity: 0.8,
}));

export const SubscriptionButton = styled('img')({
  position: 'absolute',
  top: '12%',
  right: '4%',
});