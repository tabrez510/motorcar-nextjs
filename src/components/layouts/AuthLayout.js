"use client";

import React from 'react';
import { AuthPrevImage, CarIllustration, HeaderBox, LayoutContainer, LeftGrid, MotorcarLogoImage } from './AuthLayout.styles';

const withAuthLayout = (WrappedComponent, onlylogo = false) => {

  return function LayoutWrapper({ showAuthPrev = true, ...props }) {
    return (
      <LayoutContainer container>
        <LeftGrid item xs={12} md={6}>
          <HeaderBox sx={{ marginTop: onlylogo ? '7rem' : 7, justifyContent: onlylogo ? 'center' : 'flex-start' }}>
            {!onlylogo && (
              <AuthPrevImage
                component="img"
                src="/icons/auth-previous.svg"
                alt="Authentication Back"
              />
            )}
            <MotorcarLogoImage
              component="img"
              src="/icons/motorcar-logo.svg"
              alt="Motorcar Logo"
            />
          </HeaderBox>
          <WrappedComponent {...props} />
          <CarIllustration
            component="img"
            src="/icons/car-illustration.svg"
            alt="Car Illustration"
          />
        </LeftGrid>
      </LayoutContainer>
    );
  };
};

export default withAuthLayout;
