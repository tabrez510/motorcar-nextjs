"use client"

import React from "react";
import { fonts } from "../ThemeRegistry/theme";
import { Box, CardContent, Typography, Grid, styled } from "@mui/material";

const services = [
  { title: "Car Towing", image: "/images/car-towing.svg" },
  { title: "Car Care", image: "/images/car-care.svg" },
  { title: "Car Detailing", image: "/images/car-detailing.svg" },
  { title: "Car Repair", image: "/images/car-repair.svg" },
  { title: "Car Insurance", image: "/images/car-insurance.svg" },
  { title: "Car Towing", image: "/images/car-towing.svg" },
  { title: "Car Repair", image: "/images/car-repair.svg" },
  { title: "Car Care", image: "/images/car-care.svg" },
];

const HeaderContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: 1,
  fontWeight: 600,
  opacity: 0.75,
  color: theme.palette.text.secondary,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textTransform: 'uppercase',
  letterSpacing: 1,
  marginTop: theme.spacing(1),
  fontWeight: 600,
  fontSize: '1.4rem',
  fontFamily: fonts.secondary,
}));

const ServiceCard = styled(Box)(({ theme }) => ({
  width: '23.5%',
  border: '1px solid #1A1A1A',
  borderColor: '#1A1A1A',
  borderRadius: '1.2rem',
  padding: '1%',
  paddingRight: '2%',
  transition: 'transform 0.2s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  gap:  15,
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const ServiceContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: 0,
  pl: 2,
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  width: '25%',
  lineHeight: 1.3,
  fontWeight: 500,
  color: '#1A1A1A',
}));

const OurServices = () => {
  return (
    <Box component="section" sx={{width: '98%',
      position: 'relative',
      top: '40px',
      left: '8px',}}>
      <HeaderContainer mb={3}>
        <Box>
          <SectionHeader>
            <Box component="img" src="/icons/separator-carsblue.svg" alt="Section separator" />
            <SectionSubtitle variant="subtitle2">
              What We Offer
            </SectionSubtitle>
          </SectionHeader>
          <SectionTitle>
            Explore Our Services
          </SectionTitle>
        </Box>
        <Box component="img" src="/icons/view-all.svg" alt="View all services" />
      </HeaderContainer>

      <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '22px' }} >
        {services.map((service, index) => (
            <ServiceCard key={service.title+index}>
              <ServiceContent>
                <ServiceTitle variant="subtitle1">
                  {service.title}
                </ServiceTitle>
                <Box 
                  component="img" 
                  src="/icons/service-tag.svg" 
                  alt={service.title}
                  sx={{ width: '25%' }}
                />
              </ServiceContent>
              <Box component={'img'} src={service.image} sx={{ alignSelf: 'flex-end'}} />
            </ServiceCard>
        ))}
      </Box>
    </Box>
  );
};

export default OurServices;