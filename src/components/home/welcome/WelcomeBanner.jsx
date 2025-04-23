"use client";

import { Paper } from "@mui/material";
import { Navbar } from "@/components/common";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { ActionButton, ContentContainer, Heading, ImageContainer, MainContainer, PromptText, SubHeading, TextContent } from "./welcomebanner.styles";
import CarSearch from "../components/carsearch/CarSearch";



export default function WelcomeBanner() {
    return (
        <MainContainer>
            <Navbar />
            <ContentContainer>
                <TextContent>
                    <SubHeading>Need a reliable service for your motorcar?</SubHeading>
                    <Heading>Find the Best Service for Your Motorcar with MotorCar.</Heading>
                    <ActionButton sx={{ mt: 2 }}>Shop Now</ActionButton>
                    <PromptText>I’m looking for</PromptText>
                </TextContent>

                <ImageContainer>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className}" style="
                  width: 11px;
                  height: 11px;
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
          background-color: #FFFFFF !important;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #FFD300 !important;
          opacity: 1;
        }
      `}</style>
                </ImageContainer>
            </ContentContainer>


            <Paper
                elevation={2}
                sx={{
                    p: 2,
                    width: '56vw',
                    height: '20vh',
                    borderRadius: 2,
                    display: 'inline-block',
                    position: 'absolute',
                    bottom: '4%',
                    left: '5%',
                    zIndex: 45,
                    bgcolor: '#ffffff50'
                }}
            >

<CarSearch />

            </Paper>
        </MainContainer>
    );
}
