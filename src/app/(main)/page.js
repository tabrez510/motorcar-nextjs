"use client"

import React from "react";
import { Box, styled } from "@mui/material";
import Sidebar from "@/components/common/Sidebar";
import FeaturesOffer from "@/components/home/FeaturesOffer";
import HeroBanner from "@/components/home/HeroBanner";
import OurServices from "@/components/home/OurServices";
import Products from "@/components/home/Products";
import { Banner, CarServices, ListedCars, WelcomeBanner } from "@/components/home";

// const Container = styled(Box)(({ theme }) => ({
//   position: "relative",
//   width: "100%",
//   height: "100%",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   overflowX: "hidden",
// }));

// const SidebarWrapper = styled(Box)(({ theme }) => ({
//   position: "relative",
//   width: "9vw",
//   height: "100vh",
// }));

// const FixedSidebar = styled(Box)(({ theme }) => ({
//   width: "10%",
//   height: "100vh",
//   position: "fixed",
//   top: "4%",
//   left: "2%",
// }));

// const Content = styled(Box)(({ theme }) => ({
//   width: "90%",
// }));

const Page = () => {
  return (
    // <Container>
    //   <SidebarWrapper>
    //     <FixedSidebar>
    //       <Sidebar />
    //     </FixedSidebar>
    //   </SidebarWrapper>
    //   <Content>
    <>
        <WelcomeBanner />
        <Banner />
        <CarServices />
        <FeaturesOffer />
        <OurServices />
        <ListedCars />
        <Products />
    </>
    //   </Content>
    // </Container>
  );
};

export default Page;