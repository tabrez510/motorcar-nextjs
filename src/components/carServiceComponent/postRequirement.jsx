"use client";
import React from 'react';
import Image from 'next/image';
import { Typography, Button, Box } from '@mui/material';
import { PostRequirementContainer, LeftPostConatiner, RightPostConatiner, TopLeft, BottomLeft, CarTitle, ImageWrapper, BottomRight, CarRef, TopRight, DetailWrapper, PostFormContainer, FormTitle, FormLogoContainer, FormSection, InputWrapper, Label, StyledDateInput, StyledSelect, StyledTextarea, UploadSection, UploadTitleContainer,UploadedTitle, UploadBox, UploadTitle, UploadDetails, UploadIcon, ActionButtons, PostBtn, LeftSection, MidSection, CancelBtn, } from './carServiceComponent.styles';

const PostRequirement = () => {
  return (
    <Box>
      <Typography variant="h6">Car Service</Typography>
      <PostRequirementContainer>
        <LeftPostConatiner>
          <TopLeft>
            <Image src="/icons/tick2.svg" alt="Tick Icon" width='40' height='40' />
            <CarTitle variant="h5">Nisaan Altima</CarTitle>
          </TopLeft>
          <BottomLeft>
            <ImageWrapper>
              <Image src="/images/car-post.svg" alt="Tick Icon" layout="fill" objectFit="contain" />
            </ImageWrapper>
          </BottomLeft>
        </LeftPostConatiner>
        <RightPostConatiner>
          <TopRight>
            <Image src="/icons/Vector.svg" alt="Tick Icon" width='15' height='15' />
            <CarRef variant="h5"><strong style={{ color: 'black', fontFamily: '__nextjs-Geist' }}>Car Reg. Number: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;273940</CarRef>
          </TopRight>
          <BottomRight>
            <DetailWrapper>
              <Image src="/icons/yellow-fuel.svg" alt="Tick Icon" width='15' height='15' />
              <CarRef variant="h5"><strong style={{ color: 'black', fontFamily: '__nextjs-Geist' }}>Fuel type: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Petrol</CarRef>
            </DetailWrapper>
            <DetailWrapper>
              <Image src="/icons/yellow-car.svg" alt="Tick Icon" width='15' height='15' />
              <CarRef variant="h5"><strong style={{ color: 'black', fontFamily: '__nextjs-Geist' }}>Model: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nissan PathFinder</CarRef>
            </DetailWrapper>
            <DetailWrapper>
              <Image src="/icons/yellow-car.svg" alt="Tick Icon" width='15' height='15' />
              <CarRef variant="h5"><strong style={{ color: 'black', fontFamily: '__nextjs-Geist' }}>Car Year: </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2002</CarRef>
            </DetailWrapper>
            <DetailWrapper>
              <Image src="/icons/yellow-vector.svg" alt="Tick Icon" width='15' height='15' />
              <CarRef variant="h5"><strong style={{ color: 'black', fontFamily: '__nextjs-Geist' }}>VIN Number: </strong>273940</CarRef>
            </DetailWrapper>
          </BottomRight>
        </RightPostConatiner>
      </PostRequirementContainer>

      {/* post form container */}

      <PostFormContainer>
        <FormTitle>
          <Image src="/icons/servicing-tool.svg" alt="Tool Icon" width='15' height='15' />
          <Typography style={{ fontSize: '13px' }}>Service</Typography>
        </FormTitle>
        <FormLogoContainer>
          <Typography style={{ fontSize: '18px' }}>Car<strong style={{ color: '#FFD600', fontWeight: '400' }}> Care</strong></Typography>
        </FormLogoContainer>
      </PostFormContainer>
      <FormSection>
        <InputWrapper>
          <Label>Preferred Date and Time</Label>
          <StyledDateInput  placeholder="Pick a date & time" type="datetime-local"  />
        </InputWrapper>

        <InputWrapper>
          <Label>Additional Details</Label>
          <StyledSelect>
            <option>Select additional information details</option>
          </StyledSelect>
        </InputWrapper>

        <InputWrapper>
          <Label>Any Additional Requirement</Label>
          <StyledTextarea placeholder="Describe additional needs..." required />
        </InputWrapper>

        <InputWrapper>
          <Label>Address</Label>
          <StyledTextarea placeholder="Enter Your Address" />
        </InputWrapper>

        <UploadTitleContainer>
          <UploadedTitle style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'system-ui' }}>Car Registration/ Mulkiya Card, max - 2</UploadedTitle>
          <UploadedTitle style={{ fontSize: '15px', fontWeight: '600', fontFamily: 'system-ui' }}>Upload Image - max - 3</UploadedTitle>
        </UploadTitleContainer>
        <UploadSection>
          <UploadBox>
            <LeftSection>
              <Image src="/icons/doc.svg" alt="Tool Icon" width='40' height='40' />
            </LeftSection>
            <MidSection>
              <UploadTitle>Upload Documents</UploadTitle>
              <UploadDetails>
                Supported format: PDF, Word, PPT <br />
                Max File size: <strong>4MB</strong>
              </UploadDetails>
            </MidSection>
            <UploadIcon src="/icons/upload.svg" alt="Upload Icon" />
          </UploadBox>

          <UploadBox>
            <LeftSection>
              <Image src="/icons/img.svg" alt="Tool Icon" width='40' height='40' />
            </LeftSection>
            <MidSection>
              <UploadTitle>Upload Image</UploadTitle>
              <UploadDetails>
                Supported format: JPEG, PNG, GIF, MP4, PSD, AI <br />
                Max File size: <strong>4MB</strong>
              </UploadDetails>
            </MidSection>
            <UploadIcon src="/icons/upload.svg" alt="Upload Icon" />
          </UploadBox>
        </UploadSection>

        <ActionButtons>
          <PostBtn>Post Requirement</PostBtn>
          <CancelBtn>Cancel</CancelBtn>
        </ActionButtons>
      </FormSection>

    </Box>
  );
};

export default PostRequirement;
