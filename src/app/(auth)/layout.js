import { LayoutContainer, AuthPrevImage, HeaderBox, MotorcarLogoImage, LeftGrid, WrappedComponent, CarIllustration } from '@/app/(auth)/layout.styles.js'
import React from 'react'

export default function AuthLayout({ children }) {
  
  return (
    <>
      <LayoutContainer container>
        <LeftGrid >
          <HeaderBox>
              <AuthPrevImage
                component="img"
                src="/icons/auth-previous.svg"
                alt="Authentication Back"
              />

            <MotorcarLogoImage
              component="img"
              src="/icons/motorcar-logo.svg"
              alt="Motorcar Logo"
            />
          </HeaderBox>
          <div>{children}</div>
          <CarIllustration
            component="img"
            src="/icons/car-illustration.svg"
            alt="Car Illustration"
          />
        </LeftGrid>
      </LayoutContainer>
    </>
  )
}

