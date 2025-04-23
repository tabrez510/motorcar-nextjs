"use client"

import { Box, Typography, Button, styled } from "@mui/material";
import { fonts } from "@/components/ThemeRegistry/theme";
import { horizontalScale as hs,moderateScale as ms, verticalScale as vs } from "@/utils/scaling";

export const Container = styled(Box)({
  width: `${hs(100)}vw`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: `${ms(9)}%`
});

export const LeftSection = styled(Box)({
  width: `${hs(50)}%`,
  gap: `${ms(2)}rem`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: `${vs(0)}%`
});

export const WelcomeText = styled(Typography)({
  fontFamily: fonts.secondary,
  fontSize: `${ms(1.7)}rem`,
  fontWeight: 600,
  color: "#898989",
  letterSpacing: 0,
  lineHeight: "1.8rem",
});

export const Illustration = styled("img")({
  maxWidth: `${hs(45)}%`,
  position: "relative",
  right: `${ms(2)}vw`,
  bottom: `${ms(7)}vh`,
});

export const RightSection = styled(Box)({
  width: `${hs(45)}%`,
  marginTop: '2rem'
});

export const FormContainer = styled(Box)({
  width: `${hs(35)}vw`,
  display: "flex",
  flexDirection: "column",
  gap: `${ms(16)}px`,
  marginLeft: "3%",
  position: "relative",
  top: `${ms(14)}px`,
});

export const Title = styled(Typography)({
  fontFamily: fonts.secondary,
  fontSize: `${ms(2.5)}rem`,
  fontWeight: 600,
});

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
  fontWeight: 600,
  letterSpacing: '.05rem',
  opacity: .9
}));

export const ForgotPassText = styled(Typography)(({ color, align }) => ({
  fontSize: `${ms(0.9)}rem`,
  fontFamily: fonts.primary,
  color: color,
  alignSelf: align,
  fontWeight: 400,
  opacity: .8,
  cursor: 'pointer'
}));
