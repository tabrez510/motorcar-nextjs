import { fonts } from "@/components/ThemeRegistry/theme";
import { Box, Card, CardContent, Grid, styled, Tab, Typography } from "@mui/material";

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
  
  export const CarCardContainer = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    borderRadius: theme.shape.borderRadius * 2,
    overflow: 'hidden',
    height: '100%',
    transition: 'transform 0.2s ease-in-out',
  }));
  
  export const CarContent = styled(CardContent)({
    padding: 0,
    '& > *': { fontFamily: fonts.primary }
  });
  
  export const CarTitle = styled(Typography)({
    fontSize: '1.1rem',
    color: 'text.primary',
    marginTop: 8
  });
  
  export const CarSubtitle = styled(Typography)({
    fontSize: '0.75rem',
    color: 'text.primary'
  });
  
  export const SpecContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    flexWrap: 'wrap',
    margin: `${theme.spacing(1)} 0`,
  }));
  
  export const SpecItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(0.5),
  }));
  
  export const Icon = styled('img')({
    width: 12,
    height: 12
  });
  
  export const PriceWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'baseline',
    gap: theme.spacing(1),
    margin: `${theme.spacing(1)} 0`
  }));
  
  export const OriginalPrice = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontWeight: 'bold',
    textDecoration: 'line-through'
  }));
  
  export const PriceLabel = styled(Typography)({
    fontWeight: 'bold'
  });
  
  export const DiscountedPrice = styled(Typography)({
    fontWeight: 'bold',
    fontSize: '1.25rem'
  });

  export  const SectionWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(8, 0)
  }));
  
 export const CarsGrid = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(3)
  }));
  
  export const GridItem = styled(Grid)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  });