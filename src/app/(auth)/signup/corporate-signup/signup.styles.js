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
  width: `${hs(48)}%`,
  gap: `${ms(1)}rem`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: `${ms(0)}%`
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
  maxWidth: `${hs(50)}%`,
  position: 'relative',
  marginLeft: `${ms(25)}px`,
  bottom: `${ms(45)}px`,
});

export const RightSection = styled(Box)({
  width: `${hs(45)}%`,
  marginTop: `${ms(2)}rem`
});

export const FormContainer = styled(Box)({
  width: `${hs(65)}%`,
  display: "flex",
  flexDirection: "column",
  gap: `${ms(16)}px`,
});

export const Title = styled(Typography)(({ fontSize = `${ms(2.5)}rem`}) => ({
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
  fontSize: `${ms(0.94)}rem`,
  fontWeight: 400,
  textTransform: "none",
});

export const LinkText = styled(Typography)(({ color, align }) => ({
  fontSize: `${ms(0.85)}rem`,
  fontFamily: fonts.secondary,
  color: color,
  alignSelf: align,
  fontWeight: 500,
  letterSpacing: `${ms(0.05)}rem`,
  opacity: .9,
  cursor: 'pointer',
  textDecoration: 'none'
}));

export const ForgotPassText = styled(Typography)(({ color, align }) => ({
  fontSize: `${ms(0.8)}rem`,
  fontFamily: fonts.primary,
  color: color,
  alignSelf: align,
  fontWeight: 400,
  opacity: .8,
  cursor: 'pointer'
}));
