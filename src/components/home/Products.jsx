"use client"

import React from "react";
import { fonts } from "../ThemeRegistry/theme";
import { Box, CardContent, Typography, Grid, styled, Divider } from "@mui/material";


const services = [
    { title: "Car Accessories", image: "/images/products.png", description: "Combo Sport Stereos for coupe Models", about: "Suitable for 12V and 24V batteries", apr: 450, mpr: 400 },
    { title: "Car Accessories", image: "/images/products.png", description: "Combo Sport Stereos for coupe Models", about: "Suitable for 12V and 24V batteries", apr: 450, mpr: 400 },
    { title: "Car Accessories", image: "/images/products.png", description: "Combo Sport Stereos for coupe Models", about: "Suitable for 12V and 24V batteries", apr: 450, mpr: 400 },
    { title: "Car Accessories", image: "/images/products.png", description: "Combo Sport Stereos for coupe Models", about: "Suitable for 12V and 24V batteries", apr: 450, mpr: 400 },
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
    width: '23%',
    border: '1px solid',
    borderColor: '#898989',
    borderRadius: '.5rem',
    padding: '1%',
    // paddingRight: '2%',
    paddingBottom: 0,
    transition: 'transform 0.2s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    gap:  15,
  }));
  
  const ServiceContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    width: "100%",
    height: '100%',
  }));
  
  const ServiceTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.3,
    fontWeight: 500,
    fontSize: '.8rem',
    color: '#898989',
  }));
  

const Products = () => {
  return (
    <Box component="section" sx={{position:'relative',
      width: '98%',
      left: '8px',
      top: '19vh',
      paddingBottom:'20px'}}>
    <HeaderContainer mb={2}>
      <Box>
        <SectionHeader>
          <Box component="img" src="/icons/separator-carsblue.svg" alt="Section separator" />
          <SectionSubtitle variant="subtitle2">
            Shop
          </SectionSubtitle>
        </SectionHeader>
        <SectionTitle>
          All Products
        </SectionTitle>
      </Box>
      <Box component="img" src="/icons/view-all.svg" alt="View all services" />
    </HeaderContainer>

    <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '29px' }} >
            {services.map((service, index) => (
                <ServiceCard key={service.title+index}>
                  <Box component={'img'} src={service.image} sx={{ width: '60%' }} />
                  <ServiceContent>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <Typography sx={{
                        fontSize: '.9rem',
                        color: '#1A1A1A',
                        fontWeight: 600
                    }}>{service.description}</Typography>
                     <Typography sx={{
                        fontSize: '.8rem',
                        color: '#898989',
                        fontWeight: 500,
                        my: 2
                    }}>{service.about}</Typography>
                    <Divider sx={{ width: 1}} />
                    <Box sx={{ width: '100%', mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Typography sx={{
                            fontSize: '.95rem',
                            color: '#898989',
                            fontWeight: 600,
                        }}><span style={{ textDecoration: 'line-through'}}>AED450</span> <span style={{ color: '#1A1A1A' }}>from</span> <span style={{ fontSize: '1.1rem', color: '#1A1A1A' }}>400</span></Typography>
                        <Box component={'img'} src="/icons/add.svg" />
                    </Box>
                  </ServiceContent>
                </ServiceCard>
            ))}
          </Box>
    </Box>
  )
}

export default Products