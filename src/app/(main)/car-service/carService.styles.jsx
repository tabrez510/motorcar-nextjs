import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import {horizontalScale as hs, verticalScale as vs, moderateScale as ms} from'@/utils/scaling.js';


export const NavContainer = styled(Box)(({ theme }) => ({
  padding: `${ms(16)}px`,
  position:'relative'
}));
export const StepperContainer = styled(Box)(({ theme }) => ({
  padding: `${ms(16)}px`,
  position:'relative',
  width:'100%'
}));