import { CardOverflow } from '@mui/joy';
import { SxProps } from '@mui/material';
import { horizontalScale as hs,moderateScale as ms, verticalScale as vs } from "@/utils/scaling";

export const containerStyle = {
  borderRadius: `${ms(0.5)}rem`,
  marginTop: `${ms(16)}px`,
  padding: `${ms(40)}px`,
  boxShadow: `${ms(0)}px ${ms(0)}px ${ms(2)}px ${ms(0)}px grey`,
};

export const alertBoxStyle = {
  backgroundColor: '#FFF3CD',
  borderRadius: `${ms(10)}px`,
  textAlign: 'center',
  marginTop: `${ms(16)}px`,
  paddingTop: `${ms(16)}px`,
  paddingBottom: `${ms(16)}px`,
  paddingLeft: `${ms(40)}px`,
  paddingRight: `${ms(40)}px`,
};

export const supportTextStyle = {
  fontSize: `${ms(1)}rem`,
  marginTop: `${ms(16)}px`,
  marginBottom: `${ms(0)}px`,
};

export const headingTextStyle = {
  marginBottom: `${ms(24)}px`,
};

export const backContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: `${ms(16)}px`,
  marginTop: `${ms(24)}px`,
};
