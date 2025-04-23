"use client";

import { 
  Box, 
  Button, 
  Paper, 
  Tab, 
  Tabs, 
  Typography, 
  styled 
} from "@mui/material";
import Navbar from "../common/Navbar";
import { fonts } from "../ThemeRegistry/theme";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'; 

const MainContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#fff",
  minHeight: "80vh",
  position: 'relative'
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(7),
  marginTop: theme.spacing(2),
  display: "flex",
  justifyContent: 'space-between',
  position: "relative",
  gap: theme.spacing(2),
}));

const TextContent = styled(Box)({
  marginTop: '6%',
  width: '40%'
});

const ImageContainer = styled(Box)(({ theme }) => ({
  height: '80vh',
  width: '55%',
  overflow: 'hidden',
}));

const Heading = styled(Typography)({
  fontSize: '32px',
  color: '#1A1A1A',
  fontWeight: 600,
  lineHeight: '46px',
  letterSpacing: 0,
  fontFamily: fonts.primary,
});

const SubHeading = styled(Typography)({
  fontSize: '24px',
  color: '#898989',
  fontWeight: 400,
  letterSpacing: 0,
  fontFamily: fonts.primary,
});

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius * 3,
  backgroundColor: "#FFD300",
  color: "#000",
  padding: theme.spacing(1.5, 4),
  fontWeight: "bold",
  textTransform: "none",
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: "#ffd700",
  },
}));

const PromptText = styled(Typography)({
  fontSize: '17px',
  color: '#898989',
  fontWeight: 400,
  letterSpacing: 0,
  fontFamily: fonts.primary,
});

export default function HeroBanner() {
  return (
    <MainContainer>
      <Navbar />
      <ContentContainer>
        <TextContent>
          <SubHeading>
            Need a reliable service for your motorcar?
          </SubHeading>
          <Heading sx={{ mt: 2 }}>
            Find the Best Service for Your Motorcar with MotorCar.
          </Heading>
          <PromptText sx={{ mt: 2 }}>
            Discover top-rated service centers, expert mechanics, and affordable options near you. MotorCar ensures you get the best care for your vehicle.
          </PromptText>
          <ActionButton sx={{ mt: 2 }}>
            Get Started
          </ActionButton>
        </TextContent>

        <ImageContainer>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}" style="
                  width: 12px;
                  height: 12px;
                  border-radius: 50%;
                  margin: 0 6px;
                  display: inline-block;
                "></span>`;
              },
            }}
            loop={true}
            style={{ height: '100%', width: '100%' }}
          >
            <SwiperSlide>
              <img
                src="/images/cr-car100.jpg"
                alt="Car 1"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/cr-car100.jpg"
                alt="Car 2"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/cr-car100.jpg"
                alt="Car 3"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </SwiperSlide>
          </Swiper>

          <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #FFFFFF !important; /* Yellow for all inactive */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #FFD300 !important; /* Black for active */
          opacity: 1;
        }
      `}</style>
        </ImageContainer>
      </ContentContainer>


      <Paper
      elevation={2}
      sx={{
        p: 2,
        width: '55vw',
        height: '15vh',
        borderRadius: 2,
        display: 'inline-block',
        position: 'absolute',
        bottom: '3%',
        left: '6%',
        zIndex: 45,
        bgcolor: '#ffffff50'
      }}
    >
      
      

      </Paper>
    </MainContainer>
  );
}
