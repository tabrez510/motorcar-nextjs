import React from 'react';
import {AddCarForm} from '@/components/carServiceComponent/addCar';
import {modalStyles} from '@/components/common/SignUpModel';
import {WithModalHOC} from '@/components/layouts/WithModalHOC';
import {
  Box,
  Typography,
  Button,
  CardContent,
  CardActions,
} from '@mui/material';
import {
  DirectionsCar,
  LocalGasStation,
  DriveEta,
  CarRepair,
  Numbers,
} from '@mui/icons-material';
import { StyledCardWrapper, StyledCard, TopCardSection, ImageContainer, AddCarButton,SearchContainer, SearchBox, SearchButton, AuthPrevImage, DetailsContainer, BottomCardSection, CardContainer, MidCardSection, StyledImage, StyledBox, BoxWrapper, } from './carServiceComponent.styles';
import InputAdornment from '@mui/material/InputAdornment';
const carList = [
  {
    id: 1,
    brand: 'Nissan',
    regNumber: '273940',
    fuel: 'Petrol',
    model: 'Nissan Pathfinder',
    type: 'SUV',
    vin: '273940',
    image: '/images/car-service-img.png',
  },
  {
    id: 2,
    brand: 'Toyota',
    regNumber: '374920',
    fuel: 'Diesel',
    model: 'Toyota Fortuner',
    type: 'SUV',
    vin: '374920',
    image: '/images/car-service-img.png',
  },
];

const SelectCar = ({ onNext }) => {
  const handleCardClick = (carId) => {
    onNext(carId); // passing car ID if needed
  };

  return (
    <Box>
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
        <AddCarButton variant="contained" ><AuthPrevImage
          component="img"
          src="/icons/add_icon.svg"
          alt="Search Icon"
        />Add New Car</AddCarButton>
      </SearchContainer>



      <BoxWrapper>
        {carList.map((car) => (
          <StyledBox key={car.id}>
            <StyledCardWrapper onClick={() => handleCardClick(car.id)}>
              <StyledCard>
                <CardContainer>

                  {/* top card section */}

                  <TopCardSection>
                    <Typography variant="body2" sx={{ color: '#898980', fontSize: '13px' }}>
                      <AuthPrevImage
                        component="img"
                        src="/icons/tick.svg"
                        alt="Authentication Back"
                      />
                      <span style={{ fontWeight: 500, color: '#1A1A1A', fontSize: '13px' }}>   Brand:</span> {car.brand}
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#898980', fontSize: '13px' }}>
                      <AuthPrevImage
                        component="img"
                        src="/icons/Vector.svg"
                        alt="Authentication Back"
                      />
                      <span style={{ fontWeight: 500, color: '#1A1A1A', fontSize: '13px' }}>   Car Reg. Number:</span> {car.regNumber}
                    </Typography>
                  </TopCardSection>

                  {/* //mid card section */}
                  <MidCardSection>
                    <ImageContainer>
                      <StyledImage src={car.image} alt={car.model} />
                    </ImageContainer>

                    <DetailsContainer>
                      <Typography variant="body2" sx={{ color: '#898980', fontSize: '13px' }}>
                        <AuthPrevImage
                          component="img"
                          src="/icons/fuel.svg"
                          alt="Authentication Back"
                        />
                        <span style={{ fontWeight: 500, color: '#1A1A1A', fontSize: '13px' }}>   Fuel type:</span> {car.fuel}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#898980', fontSize: '13px' }}>
                        <AuthPrevImage
                          component="img"
                          src="/icons/car-icon.svg"
                          alt="Authentication Back"
                        />
                        <span style={{ fontWeight: 500, color: '#1A1A1A', fontSize: '13px' }}>   Model:</span> {car.model}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#898980', fontSize: '13px' }}>
                        <AuthPrevImage
                          component="img"
                          src="/icons/car-icon.svg"
                          alt="Authentication Back"
                        />
                        <span style={{ fontWeight: 500, color: '#1A1A1A', fontSize: '13px' }}>   Car Type:</span> {car.type}
                      </Typography>

                      <Typography variant="body2" sx={{ color: '#898980', fontSize: '13px' }}>
                        <AuthPrevImage
                          component="img"
                          src="/icons/Vector.svg"
                          alt="Authentication Back"
                        />
                        <span style={{ fontWeight: 500, color: "#1A1A1A", fontSize: '13px' }}>   VIN Number:</span> {car.vin}
                      </Typography>
                    </DetailsContainer>
                  </MidCardSection>
                </CardContainer>

                {/* Bottom card section */}

                <BottomCardSection>
                  <CardActions >
                    <Button variant="contained" size="small" color="primary" sx={{ textTransform: 'none', backgroundColor: '#2D4DF1' }} >
                      <AuthPrevImage
                        component="img"
                        src="/icons/edit_icon.svg"
                        alt="Authentication Back"
                      />
                      Edit
                    </Button>
                    <Button variant="contained" size="small" color="error" sx={{ textTransform: 'none', backgroundColor: '#FA4C26' }} >
                      <AuthPrevImage
                        component="img"
                        src="/icons/delete.svg"
                        alt="Authentication Back"
                      />
                      Delete
                    </Button>
                  </CardActions>
                </BottomCardSection>
              </StyledCard>
            </StyledCardWrapper>
          </StyledBox>
        ))}
      </BoxWrapper>
        <AddCarForm/>
    </Box>
  );
};

export default SelectCar;
