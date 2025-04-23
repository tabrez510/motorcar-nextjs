"use client"
import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  styled 
} from '@mui/material';
import { fonts } from '../ThemeRegistry/theme';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const StyledSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '70vh',
}));

const StyledImageContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
});

const StyledImage = styled('img')({
  maxWidth: '90%',
  height: 'auto',
});

const StyledContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4, 0),
}));

const StyledHeadingContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 8,
  alignItems: 'center',
});

const StyledSubtitle = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: 1,
  fontWeight: 600,
  opacity: 0.75,
  color: theme.palette.text.secondary,
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  color: '#FFD300',
  fontFamily: fonts.primary,
  fontSize: '1.7rem',
  margin: theme.spacing(2, 0),
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  width: '50%',
  fontFamily: fonts.primary,
  fontSize: '1rem',
  color: '#2B4448',
}));

const StyledList = styled(List)({
  marginTop: 8,
});

const StyledListItem = styled(ListItem)({
  padding: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 8,
  alignItems: 'center',
});

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: 'auto',
});

const StyledButton = styled(Button)({
  padding: 0,
  minWidth: 0,
  color: 'black',
  textTransform: 'none',
  fontWeight: 400,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginTop: 16,
});

const StyledButtonText = styled('span')({
  color: '#FDC100',
  fontWeight: 700,
  fontSize: '1.1rem',
  letterSpacing: '0.5px',
  borderBottom: '1px solid black',
});

const CarServices = () => {
  const services = [
    'EngineGuard Service – For engine maintenance and repairs',
    'BrakeSure Care – Dedicated to brake system checks and fixes',
    'TyreTrack Service – Tyre replacement, alignment, and balancing',
    'BatteryBoost – Battery checkups, replacements, and charging',
  ];

  return (
    <StyledSection>
      <StyledImageContainer>
        <StyledImage 
          src="/icons/car-service-background.svg" 
          alt="Car services illustration" 
        />
      </StyledImageContainer>

      <StyledContentContainer>
        <StyledHeadingContainer>
          <img src='/icons/separator-carsblue.svg' alt="Section separator" />
          <StyledSubtitle variant="subtitle2">
            Car Services
          </StyledSubtitle>
        </StyledHeadingContainer>

        <StyledTitle variant="h5" fontWeight="bold">
          Choose Our Car Services?
        </StyledTitle>

        <StyledDescription variant="body2">
          If you're looking for car services, you've likely researched what you need and the features that matter.
        </StyledDescription>

        <StyledList disablePadding>
          {services.map((text, index) => (
            <StyledListItem key={index} disableGutters>
              <StyledListItemIcon>
                <RadioButtonCheckedIcon sx={{ fontSize: 16, color: 'black' }} />
              </StyledListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontSize: '16px',
                  letterSpacing: 0,
                  color: '#2B4448',
                }}
              />
            </StyledListItem>
          ))}
        </StyledList>

        <StyledButton>
          <StyledButtonText>MY CAR</StyledButtonText>
          <ArrowForwardIcon sx={{ color: 'black', fontSize: '30px' }} />
        </StyledButton>
      </StyledContentContainer>
    </StyledSection>
  );
};

export default CarServices;