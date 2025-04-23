"use client";

import { Box, Typography, Button, styled } from "@mui/material";
import { fonts } from "@/components/ThemeRegistry/theme";
import Link from "next/link";
import { horizontalScale as hs,moderateScale as ms, verticalScale as vs } from "@/utils/scaling";

export const Container = styled(Box)({
  width: `${hs(100)}%`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  paddingLeft: `${ms(9)}%`
});


export const LeftSection = styled(Box)({
  width: `${hs(45)}%`,
  display: "flex",
  flexDirection: "column",
  gap: `${ms(1.5)}rem`,
  marginTop: `${ms(1.2)}rem`
});

export const WelcomeText = styled(Typography)({
  fontFamily: fonts.secondary,
  fontSize: `${ms(1.7)}rem`,
  fontWeight: 600,
  color: "#898989",
  letterSpacing: 0,
  lineHeight: `${ms(2.5)}rem`,
});

export const Illustration = styled("img")({
  maxWidth: `${hs(48)}%`,
  marginLeft: `${ms(10)}rem`,
  position: "relative",
  bottom: `${ms(50)}px`,
});

export const RightSection = styled(Box)({
  width: `${hs(47)}%`,
  paddingTop: `${ms(1)}rem`,
});

export const FormContainer = styled(Box)({
  width: `${hs(65)}%`,
  display: "flex",
  flexDirection: "column",
  gap: `${ms(0.7)}rem`,
});

export const Title = styled(Typography)(({ fontSize = `${ms(2.4)}rem` }) => ({
  fontFamily: fonts.secondary,
  fontSize: fontSize,
  fontWeight: 600, 
  lineHeight: fontSize
}));

export const StyledButton = styled(Button)({
  backgroundColor: "black",
  margin: `${ms(24)}px ${ms(0)}px`,
  padding: `${ms(0.7)}rem ${ms(0)}px`,
  borderRadius: `${ms(10)}px`,
  fontFamily: fonts.secondary,
  fontSize:  `${ms(1)}rem`,
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
