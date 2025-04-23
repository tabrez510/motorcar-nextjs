"use client";
import { Box } from '@mui/material';
import Navbar from '@/components/common/Navbar';
import { NavContainer, StepperContainer } from './carService.styles';
import StepperComponent from '@/components/carServiceComponent/carServiceStepper';

function Page() {
    return (
        <>
            <NavContainer>
                <Navbar />
            </NavContainer>
            <StepperContainer>
                <StepperComponent />
            </StepperContainer>
        </>

    );
}

export default Page;