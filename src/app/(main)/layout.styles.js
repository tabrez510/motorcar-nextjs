"use client";

import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  // overflowX: "hidden",
}));

export const SidebarWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "9vw",
  height: "100vh",
}));

export const FixedSidebar = styled(Box)(({ theme }) => ({
  width: "10%",
  height: "100vh",
  position: "fixed",
  top: "4%",
  left: "2%",
}));

export const Content = styled(Box)(({ theme }) => ({
  width: "90%",
}));
