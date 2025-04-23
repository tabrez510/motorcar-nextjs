import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  AddCarButton,
  SearchContainer,
  SearchBox,
  SearchButton,
  AuthPrevImage,
  CarSubContainer,
  ServiceTitle,
  ServiceCard,
  ServiceImageContainer,
  ArrowIcon,
  ServiceImage,
} from './carServiceComponent.styles';
import InputAdornment from '@mui/material/InputAdornment';

// Sample service list with icons
const serviceList = [
  { title: 'Car Wash', icon: '/images/car-detailing.svg' },
  { title: 'A/C Checkup', icon: '/images/ac-repair.svg' },
  { title: 'Full Car Checkup', icon: '/images/car-repair.svg' },
  { title: 'Oil service', icon: '/images/oil-service.svg' },
];

const CarSubCategory = ({ onNext }) => {
  return (
    <Box>
      {/* Search Bar */}
      <SearchContainer>
        <SearchBox
          placeholder="Search Car"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AuthPrevImage
                  component="img"
                  src="/icons/search.svg"
                  alt="Search Icon"
                />
              </InputAdornment>
            ),
          }}
        />
        <SearchButton variant="contained">Search</SearchButton>
      </SearchContainer>

      {/* Services Cards */}
      <CarSubContainer>
        {serviceList.map((service, index) => (
          <ServiceCard key={index} onClick={onNext}>
            <ServiceTitle>
              {service.title}
            </ServiceTitle>
            <ServiceImageContainer>
              <ArrowIcon
                component="img"
                src="/icons/arrow_button.svg"
                alt="Search Icon"
                onClick={()=>handleClick()}
                sx={{ cursor: 'pointer' }}
              />
              <ServiceImage component="img" src={service.icon} alt={service.title} />
            </ServiceImageContainer>
          </ServiceCard>
        ))}
      </CarSubContainer>
    </Box>
  );
};

export default CarSubCategory;
