import React, { useState } from 'react';
import { Box, Step, StepLabel, Stepper } from '@mui/material';
import SelectCar from './SelectCar';
import CarSubCategory from './CarSubCategory';
import PostRequirement from './PostRequirement';

const steps = [
  "Selected Car Service",
  'Select a Car',
  'Car Service - Sub category',
  'Post Requirement'
];

const StepperComponent = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 1:
        return <SelectCar onNext={handleNext} />;
      case 2:
        return <CarSubCategory onNext={handleNext} />;
      case 3:
        return <PostRequirement />;

      default:
        return null;
    }
  };

  const iconSx = {
    // Default: white background, yellow border, yellow number
    border: '1px solid #FFD300',
    fill: '#FFD300',
    // backgroundColor: '#FFD300',
    color: '#FFDFFF',

    borderRadius: '50%',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem ',

    // Active: yellow background, white number
    '&.Mui-active': {
      fill: '#FFD300',
      backgroundColor: 'white',
    },

    '&.Mui-completed': {
      backgroundColor: '#FFD300',
      // color: '#FFFFFF',
      fill: '#FFFFFF',
      border: '1px solid #FFD300',
    },
  };




  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconProps={{ sx: iconSx }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        {getStepContent(activeStep)}
      </Box>
    </Box>
  );
};

export default StepperComponent;
