import { fonts } from "@/components/ThemeRegistry/theme";
import { Box, styled, Typography } from "@mui/material";

export const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    width: '100%'
  }));
  
export const HeaderTitleWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
  }));

export const SectionTitle = styled(Typography)(({ theme }) => ({
    fontFamily: fonts.secondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: theme.spacing(1),
    fontWeight: 600,
    fontSize: '1.4rem',
  }));
  
export const SectionSubtitle = styled(Typography)(({ theme }) => ({
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 600,
    opacity: 0.75,
    color: theme.palette.text.secondary,
  }));