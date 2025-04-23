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
  paddingLeft: `${ms(10)}%`
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
  letterSpacing: 0,
  lineHeight: `${ms(2.8)}rem`,
});

export const Illustration = styled("img")({
  maxWidth: `${hs(48)}%`,
  marginLeft: `${ms(6)}rem`,
  position: "relative",
  bottom: `${ms(55)}px`,
});

export const RightSection = styled(Box)({
  width: `${hs(45)}%`,
  paddingTop: `${ms(1)}rem`,
});

export const FormContainer = styled(Box)({
  width: `${hs(68)}%`,
  display: "flex",
  position:'relative',
  top:`${vs(6)}vh`,
  flexDirection: "column",
  gap: `${ms(1)}em`,
});

export const Title = styled(Typography)(({ fontSize = `${ms(2.4)}rem` }) => ({
  fontFamily: fonts.secondary,
  fontSize: fontSize,
  fontWeight: 600,
  lineHeight: `${ms(2.5)}rem`
}));

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

export const LinkText = styled(Typography)(({ align, color }) => ({
  fontSize: `${ms(0.95)}rem`,
  fontFamily: fonts.secondary,
  color: color,
  alignSelf: align,
  fontWeight: 500,
  letterSpacing: `${ms(0.05)}rem`,
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
