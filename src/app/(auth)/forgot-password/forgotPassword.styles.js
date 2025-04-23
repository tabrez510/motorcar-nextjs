"use client";

import { Box, Typography, Button, styled } from "@mui/material";
import { fonts } from "@/components/ThemeRegistry/theme";
import Link from "next/link";
import { horizontalScale as hs,moderateScale as ms, verticalScale as vs } from "@/utils/scaling";

export const Container = styled(Box)({
  width: `${hs(100)}%`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: `${ms(9)}%`
});


export const LeftSection = styled(Box)({
  width: `${hs(50)}%`,
  display: "flex",
  flexDirection: "column",
});

export const WelcomeText = styled(Typography)({
  fontFamily: fonts.secondary,
  fontSize: `${ms(1.7)}rem`,
  fontWeight: 600,
  color: "#898989",
  letterSpacing: `${ms(0)}px`,
  lineHeight: `${ms(2.8)}rem`,
});

export const Illustration = styled("img")({
  maxWidth: `${hs(50)}%`,
    marginLeft: `${ms(5)}rem`,
    position: "relative",
    bottom: `${ms(38)}px`
});

export const RightSection = styled(Box)({
  width: `${hs(45)}%`,
  position:"relative",
  top: `${ms(4)}rem`,
  left: `${ms(3)}rem`,
});

export const FormContainer = styled(Box)({
  width: `${hs(68)}%`,
  display: "flex",
  flexDirection: "column",
  gap: `${ms(30)}px`,
});

export const Title = styled(Typography)({
  fontFamily: fonts.secondary,
  fontSize: `${ms(2.54)}rem`,
  fontWeight: 600, 
  lineHeight: `${ms(2.5)}rem`
});

export const StyledButton = styled(Button)({
  backgroundColor: "black",
  margin: `${ms(24)}px ${ms(0)}px`,
  padding: `${ms(0.7)}rem ${ms(0)}px`,
  borderRadius: `${ms(10)}px`,
  fontFamily: fonts.secondary,
  fontSize: `${ms(1)}rem`,
  fontWeight: 400, 
  textTransform: "none",
});

export const LinkText = styled(Link)(({ align }) => ({
  fontSize: `${ms(0.95)}rem`,
  fontFamily: fonts.secondary,
  color: '#FFC107',
  alignSelf: align,
  fontWeight: 500, 
  letterSpacing: `${ms(0.5)}rem`,
  opacity: .9,
  textDecoration: 'none'
}));

export const NormalText = styled(Typography)(({ color, align }) => ({
  fontSize: `${ms(0.8)}rem`,
  fontFamily: fonts.secondary,
  color: color,
  alignSelf: align,
  fontWeight: 500, 
  opacity: .9
}));
