"use client";

import { Box, Typography, Button, styled } from "@mui/material";
import { fonts } from "@/components/ThemeRegistry/theme";
import Link from "next/link";
import {horizontalScale as hs, verticalScale as vs, moderateScale as ms} from'@/utils/scaling.js';

export const Container = styled(Box)({
  width: `${hs(100)}%`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  paddingLeft: `${ms(9)}%`,
});

export const DocumentBtn = styled("img")({
  maxWidth: `${hs(100)}%`,
  cursor: 'pointer'
});

export const LeftSection = styled(Box)({
  width: `${hs(50)}%`,
  display: "flex",
  flexDirection: "column",
  gap: `${ms(2)}rem`,
  marginTop: `${ms(1)}rem`
});

export const WelcomeText = styled(Typography)({
  fontFamily: fonts.secondary,
  fontSize: `${ms(1.7)}rem`,
  fontWeight: 600,
  color: "#898989",
  letterSpacing: 0,
  lineHeight: `${ms(1.8)}rem`,
  marginTop: `${ms(8)}px`,
});

export const Illustration = styled("img")({
  maxWidth: `${hs(40)}%`,
  marginLeft: `${ms(9)}rem`,
  marginTop: `${ms(-6)}%`
});

export const RightSection = styled(Box)({
  width: `${hs(45)}%`,
  position:'absolute',
  height:`${vs(127)}vh`,
  left:`${hs(55)}%`
});

export const FormContainer = styled(Box)({
  width: `${hs(68)}%`,
  display: "flex",
  flexDirection: "column",
  gap: `${ms(1)}rem`,
  marginTop:`${ms(14)}%`,
});

export const Title = styled(Typography)(({ fontSize = `${ms(2.4)}rem` }) => ({
  fontFamily: fonts.secondary,
  fontSize: fontSize,
  fontWeight: 600, 
  lineHeight: `${ms(2.5)}rem`
}));

export const StyledButton = styled(Button)({
  backgroundColor: "black",
  padding: `${ms(0.7)}rem ${ms(0)}px`,
  borderRadius:  `${ms(10)}px`,
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

