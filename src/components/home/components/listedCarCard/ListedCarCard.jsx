import React from 'react'
import { CarCardContainer, CarContent, CarSubtitle, CarTitle, DiscountedPrice, Icon, OriginalPrice, PriceLabel, PriceWrapper, SpecContainer, SpecItem } from './listedcarcard.styles';
import { CardActionArea, CardMedia, Divider, Typography } from '@mui/material';

const ICON_MAP = {
    mpg: '/icons/speed.svg',
    cc: '/icons/engine-light.svg',
    fuel: '/icons/petrol.svg',
  };

  
const CarSpecs = ({ specs }) => (
    <SpecContainer>
      {specs.map((spec, index) => {
        const [value, unit] = spec.split(' ');
        const iconKey = unit === 'mpg' ? 'mpg' : unit === 'cc' ? 'cc' : 'fuel';
        
        return (
          <SpecItem key={index}>
            <Icon src={ICON_MAP[iconKey]} alt={iconKey} />
            <Typography variant="caption" mt={.5}>{spec}</Typography>
          </SpecItem>
        );
      })}
    </SpecContainer>
  );


const ListedCarCard = ({ car }) => (
    <CarCardContainer>
      <CardActionArea>
        <CardMedia component="img" sx={{ borderRadius: '11px' }} height="160"  image={car.image} alt={car.title} />
        <CarContent>
          <CarTitle variant="h3">{car.title}</CarTitle>
          <CarSubtitle>{car.subTitle}</CarSubtitle>
          
          <CarSpecs specs={car.specs} />
          <Divider />
          
          <PriceWrapper>
            <OriginalPrice>{car.priceMain}</OriginalPrice>
            <PriceLabel>from</PriceLabel>
            <DiscountedPrice>{car.priceSub}</DiscountedPrice>
          </PriceWrapper>
        </CarContent>
      </CardActionArea>
    </CarCardContainer>
  );

export default ListedCarCard