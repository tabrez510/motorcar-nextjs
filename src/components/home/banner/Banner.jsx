"use client"

import React from 'react';
import { BannerContainer, BannerImage, ContentBox, Description, SubscriptionButton, Subtitle, Title } from './banner.styles';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src="/images/banner-img.svg" alt="Banner" />
      <ContentBox>
        <Title>
          Subscription Plan <Subtitle>(Trial Period)</Subtitle>
        </Title>
        <Description>
          Once the trial period ends, they must purchase a subscription from the available plans to continue using the platform.
        </Description>
      </ContentBox>
      <SubscriptionButton src="/icons/subscription-button.svg" alt="Subscription Button" />
    </BannerContainer>
  );
};

export default Banner;