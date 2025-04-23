// Footer.js
import React from 'react';
import {
  FooterContainer,
  FooterGrid,
  FooterColumn,
  FooterTitle,
  FooterLink,
  BottomBar,
  PolicyLinks,
  SocialIcons,
  FooterLinks
} from '@/components/home/footer/footer.styles';

import { Typography, IconButton } from '@mui/material';
import { Facebook, Email, Instagram, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>Car Wash</FooterTitle>
          <FooterLink href="#">Exterior/ Interior Wash</FooterLink>
          <FooterLink href="#">Steam Wash</FooterLink>
          <FooterLink href="#">Car Wrapping</FooterLink>
          <FooterLink href="#">Paint Treatment</FooterLink>
          <FooterLink href="#">Car Detailing</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Car Service</FooterTitle>
          <FooterLink href="#">Exterior/ Interior Wash</FooterLink>
          <FooterLink href="#">Steam Wash</FooterLink>
          <FooterLink href="#">Car Wrapping</FooterLink>
          <FooterLink href="#">Paint Treatment</FooterLink>
          <FooterLink href="#">Car Detailing</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Feature</FooterTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Cookies</FooterLink>
          <FooterLink href="#">Remove Account</FooterLink>
        </FooterColumn>
      </FooterGrid>

      <BottomBar>
        <PolicyLinks>
          <FooterLinks href="#">Term and Condition</FooterLinks>
          |<FooterLinks href="#">Privacy Policy</FooterLinks>
          |<FooterLinks href="#">Refund</FooterLinks>
        </PolicyLinks>

        <Typography style={{fontSize:'15px'}}>Copyright@2025</Typography>

        <SocialIcons>
          <IconButton style={{color:'black'}}><Facebook /></IconButton>
          <IconButton style={{color:'black'}}><Email /></IconButton>
          <IconButton style={{color:'black'}}><Instagram /></IconButton>
          <IconButton style={{color:'black'}}><WhatsApp /></IconButton>
        </SocialIcons>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
