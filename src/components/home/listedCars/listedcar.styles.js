import { Box, Grid, Tab, Tabs, Typography, styled } from '@mui/material';
import { fonts } from '@/components/ThemeRegistry/theme';

export const SectionWrapper = styled(Box)(({ theme }) => ({
  width: '98%',
  position: 'relative',
  left: '8px',
  top:'15vh'
}));

export const TabNavigation = styled(Tabs)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  minHeight: '2rem',

  '& .MuiTabs-indicator': {
    height: 0
  },

  '& .MuiTabs-flexContainer': {
    gap: theme.spacing(2),
    alignItems: 'center',
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  padding: 0,
  minWidth: 0,
  minHeight: 'auto',
  fontWeight: 600,
  fontSize: '0.9rem',
  lineHeight: '1.8rem',
  textTransform: 'none',
  '&.Mui-selected': {
    color: theme.palette.common.black,
    borderBottom: `2px solid #FFD300`,
  },
}));

export const CarsGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3)
}));

export const GridItem = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%'
});