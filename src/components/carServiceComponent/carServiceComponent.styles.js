import { Box, styled } from '@mui/system';
import Image from 'next/image';
import { Card, CardContent, CardActions, TextField, Typography } from '@mui/material';
import { horizontalScale as hs, moderateScale as ms, verticalScale as vs } from "@/utils/scaling";

import { Button } from '@mui/material';


// search bar css----------------------------------------------------

export const SearchContainer = styled(Box)(({ theme }) => ({
  width: `${hs(100)}%`,
  height: `${vs(16)}vh`,
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'flex-start',
  bottom: `${ms(2)}vh`
}));

export const SearchBox = styled(TextField)(({ theme }) => ({
  width: `${hs(40)}%`,
  height: `${vs(7)}vh`,
  '& .MuiInputBase-root': {
    height: '100%',
    borderRadius: `${ms(5)}px`,
    paddingLeft: `${ms(2)}px`,
    backgroundColor: '#f5f5f5',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid #bdbdbd', // Light grey border
  },
  '& input': {
    fontSize: `${ms(14)}px`,
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#9e9e9e',
    opacity: 1,
  },
}));



export const SearchButton = styled(Button)(({ theme }) => ({
  height: `${vs(7)}vh`,
  marginLeft: `${ms(2)}%`,
  backgroundColor: '#FFD700', // Bright yellow
  color: '#000',
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#FFC107', // Slightly darker yellow on hover
  },
}));

export const AddCarButton = styled(Button)(({ theme }) => ({
  height: `${vs(7)}vh`,
  position: 'relative',
  marginLeft: `${ms(37)}%`,
  gap: `${ms(5)}px`,
  backgroundColor: '#FFD700', // Bright yellow
  color: '#000',
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: '#FFC107', // Slightly darker yellow on hover
  },
}));



// select car css --------------------------------------------

export const BoxWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: `${ms(16)}px`,
}));


export const StyledBox = styled(Box)(({ theme }) => ({
  width: `${hs(35)}%`,
  position: 'relative',
  display: 'flex',
}));

export const StyledCardWrapper = styled('div')(({ theme }) => ({
  width: `${hs(100)}%`,
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  '&:hover': {
    boxShadow: theme.shadows[6],
  },
}));


export const StyledImage = styled('img')(({ theme }) => ({
  width: `${hs(80)}%`,
}));

export const CardContainer = styled(Box)(({ theme }) => ({
  width: `${hs(100)}%`,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'

}));
export const ImageContainer = styled(Box)(({ theme }) => ({
  width: `${hs(50)}%`,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}));
export const DetailsContainer = styled(Box)(({ theme }) => ({
  width: `${hs(45)}%`,
  rowGap: `${ms(2)}vh`,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  left: `${ms(5)}%`,
  justifyContent: 'center',

}));
export const TopCardSection = styled(Box)(({ theme }) => ({
  width: `${hs(95)}%`,
  position: 'relative',
  display: 'flex',
  rowGap: `${ms(2)}vh`,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  left: `${ms(5)}%`,
  top: `${ms(2)}vh`,

}));
export const AuthPrevImage = styled(Box)({
  maxWidth: `${ms(20)}px`,
});

export const MidCardSection = styled(Box)(({ theme }) => ({
  width: `${hs(100)}%`,
  display: 'flex',
  position: 'relative',
  top: `${ms(2)}vh`,

}));
export const BottomCardSection = styled(Box)(({ theme }) => ({
  width: `${hs(100)}%`,
  position: 'relative',
  display: 'flex',
  padding: `${ms(5)}%`,
  justifyContent: 'end'
}));


// sub category css-----------------------------------------------------

export const CarSubContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  gap: `${ms(20)}px`,
});

// Individual service card
export const ServiceCard = styled(Card)({
  width: `${hs(23)}%`,
  height: `${vs(25)}vh`,
  position: 'relative',
  display: 'flex',
  border: '1px solid #695f5f',
  borderRadius: `${ms(20)}px`,
});

export const ServiceTitle = styled(Box)(({ theme }) => ({
  width: `${hs(50)}%`,
  height: `${vs(100)}%`,
  position: 'relative',
  paddingLeft: `${ms(6)}%`,
  paddingTop: `${ms(6)}%`,
  paddingRight: `${ms(18)}%`,
  fontWeight: '600',
  fontSize: theme.typography.body2.fontSize,
}));

export const ServiceImageContainer = styled(Box)({
  width: `${hs(50)}%`,
  height: `${vs(100)}%`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',

});

export const ArrowButton = styled(Button)({
  width: `${hs(20)}%`,
  height: `${vs(45)}%`,
  position: 'relative',
  backgroundColor: 'white'
});

export const ArrowIcon = styled(Box)({
  width: `${hs(20)}%`,
  height: `${vs(20)}%`,
  left: `${ms(70)}%`,
  top: `${ms(15)}%`,
  position: 'relative'
});

export const ServiceImage = styled(Box)({
  width: `${hs(80)}%`,
  height: `${vs(40)}%`,
  position: 'relative',
  left: `${ms(8)}%`,
  bottom: `${ms(8)}%`,
});


// post requirement css--------------------------------

export const PostRequirementContainer = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(60)}vh`,
  borderRadius: `${ms(15)}px`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: `${ms(2)}vh`,
  background: 'linear-gradient(to right, #D7D7D7, #FFFFFF)',
  boxShadow: '0px 0px 7px 0px #dbd8d8'
});
export const LeftPostConatiner = styled(Box)({
  width: `${hs(60)}%`,
  height: `${vs(100)}%`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  position: 'relative',
});
export const TopLeft = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(20)}%`,
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  left: `${ms(2)}%`,
  gap: `${ms(3)}%`,
});
export const CarTitle = styled(Typography)({
  fontSize: `${ms(30)}px`,
  fontFamily: 'system-ui',
  fontWeight: '600'
});

export const BottomLeft = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(80)}%`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const ImageWrapper = styled(Box)({
  width: `${hs(90)}%`,
  height: `${vs(90)}%`,
  position: 'relative'
});



export const RightPostConatiner = styled(Box)({
  width: `${hs(40)}%`,
  height: `${vs(100)}%`,
  borderRadius: `${ms(15)}px`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const TopRight = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(20)}%`,
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'end',
  right: `${ms(5)}%`,
  gap: `${ms(2)}%`,
});

export const CarRef = styled(Typography)({
  fontSize: `${ms(15)}px`,
  color: '#898989'
});

export const BottomRight = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(80)}%`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'center',
  position: 'relative',
  gap: `${ms(2)}%`,
  paddingLeft: `${ms(40)}%`,
  paddingBottom: `${ms(10)}%`,

});

export const DetailWrapper = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(10)}%`,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: `${ms(3)}%`,
});



export const PostFormContainer = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(12)}vh`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  position: 'relative',
  top: `${ms(5)}vh`,
  paddingInline: `${ms(2)}%`,
});

export const FormTitle = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(50)}%`,
  display: 'flex',
  color: '#898989',
  gap: `${ms(0.5)}%`,
  alignItems: 'center',
  justifyContent: "start",
});

export const FormLogoContainer = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(50)}%`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  position: 'relative',
  top: `${ms(1)}vh`,
});


export const FormSection = styled(Box)({
  width: `${hs(100)}%`,
  display: 'flex',
  flexDirection: 'column',
  gap: `${hs(20)}px`,
  paddingInline: `${vs(2)}%`,
  position: 'relative',
  top: `${ms(8)}vh`
});

export const InputWrapper = styled(Box)({
  width: `${hs(100)}%`,
  display: 'flex',
  position: 'relative',
});

export const Label = styled('label')({
  width: `${hs(50)}%`,
  fontSize: `${ms(16)}px`,
  fontFamily: 'Poppins, sans-serif',
});

export const StyledDateInput = styled('input')({
  width: `${hs(50)}%`,
  height: `${vs(9)}vh`,
  fontSize: `${ms(15)}px`,
  color:'#898989',
  paddingLeft: `${ms(10)}px`,
  paddingRight: `${ms(10)}px`,
  border: '1px solid #dad2d2',
  borderRadius: `${ms(8)}px`,
  fontFamily: 'Poppins, sans-serif',
  letterSpacing: `${ms(1)}px`,
});

export const StyledSelect = styled('select')({
  width: `${hs(50)}%`,
  height: `${vs(9)}vh`,
  color: '#898989',
  fontSize: `${ms(15)}px`,
  paddingLeft: `${ms(10)}px`,
  border: '1px solid #dad2d2',
  borderRadius: `${ms(8)}px`,
  fontFamily: 'Poppins, sans-serif',
  letterSpacing: `${ms(1)}px`,
});

export const StyledTextarea = styled('textarea')({
  width: `${hs(50)}%`,
  height: `${vs(20)}vh`,
  paddingLeft: `${ms(10)}px`,
  paddingTop: `${ms(12)}px`,
  border: '1px solid #dad2d2',
  borderRadius: `${ms(8)}px`,
  fontFamily: 'Poppins, sans-serif',
  fontSize: `${ms(15)}px`,
  letterSpacing: `${ms(1)}px`,
  resize: 'none'
});

export const UploadTitleContainer = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(3)}vh`,
  display: 'flex',
  position: 'relative',
  top: `${ms(1)}vh`,
  gap: `${ms(24.5)}%`,
});

export const UploadedTitle = styled(Typography)({
  fontSize: `${ms(15)}px`,
  fontFamily: 'system-ui',
  fontWeight: '600'
});
export const UploadSection = styled(Box)({
  display: 'flex',
  gap: `${hs(20)}px`,
  width: `${hs(100)}%`,
  height: `${vs(20)}vh`,

});

export const UploadBox = styled(Box)({
  flex: 1,
  border: `${ms(2)}px dashed #FFD600`,
  height: `${vs(100)}%`,
  borderRadius: `${ms(3)}px`,
  background: '#fffdf5',
  display: 'flex',
});

export const LeftSection = styled(Box)({
  width: `${hs(15)}%`,
  height: `${vs(100)}%`,
  display: 'flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center'
});
export const MidSection = styled(Box)({
  width: `${hs(70)}%`,
  height: `${vs(100)}%`,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'start'
});


export const UploadTitle = styled('h5')({
  fontSize: `${ms(14)}px`,
  margin: `0 0 ${vs(5)}px`,
  fontFamily: 'Poppins, sans-serif',
});

export const UploadDetails = styled('p')({
  fontSize: `${ms(10)}px`,
  color: '#555',
  fontFamily: 'Poppins, sans-serif',
});

export const UploadIcon = styled('img')({
  width: `${hs(50)}px`,
  // alignSelf: 'flex-end',
});

export const ActionButtons = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: `${hs(10)}px`,
  position: 'relative',
  top: `${ms(2)}vh`,
  paddingBottom: `${ms(5)}vh`
});

export const PostBtn = styled('button')({
  padding: `${vs(12)}px ${hs(20)}px`,
  backgroundColor: '#FFD600',
  border: 'none',
  borderRadius: `${ms(8)}px`,
  fontWeight: 500,
  fontFamily: 'Poppins, sans-serif',
  cursor: 'pointer',
});

export const CancelBtn = styled('button')({
  padding: `${vs(12)}px ${hs(20)}px`,
  backgroundColor: '#808080',
  color: 'white',
  border: 'none',
  borderRadius: `${ms(8)}px`,
  fontFamily: 'Poppins, sans-serif',
  cursor: 'pointer',
});


// add car section-----------------------------------

export const FormDivision = styled(Box)({
  width: `${hs(100)}%`,
  height: `${vs(50)}vh`,
  display: 'flex',
  position: 'relative',
  color:'red'
});