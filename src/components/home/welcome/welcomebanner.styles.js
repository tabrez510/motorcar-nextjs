const { styled, Box, Typography, Button } = require("@mui/material");
import { fonts } from "@/components/ThemeRegistry/theme";

export const MainContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(1),
    backgroundColor: "#fff",
    minHeight: "80vh",
    position: 'relative'
  }));
  
  export const ContentContainer = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(6),
    marginTop: theme.spacing(2),
    height: "95vh",
    display: "flex",
    justifyContent: 'space-between',
    position: "relative",
    gap: theme.spacing(2),
  }));
  
  export const TextContent = styled(Box)({
    marginTop: '7.5%',
    width: '45%',
  });
  
  export const ImageContainer = styled(Box)(({ theme }) => ({
    height: '100%',
    width: '55%',
    overflow: 'hidden',
  }));
  
  export const Heading = styled(Typography)({
    fontSize: '1.9rem',
    color: '#1A1A1A',
    fontWeight: 600,
    lineHeight: '2.7rem',
    letterSpacing: .5,
    fontFamily: fonts.primary,
    marginTop: '.7rem'
  });
  
  export const SubHeading = styled(Typography)({
    fontSize: '1.5rem',
    color: '#898989',
    fontWeight: 400,
    letterSpacing: 0,
    fontFamily: fonts.primary,
    letterSpacing: .7
  });
  
  export const ActionButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 3,
    backgroundColor: "#FFD300",
    color: "#000",
    padding: theme.spacing(1.5, 4),
    fontWeight: "bold",
    textTransform: "none",
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: "#ffd700",
    },
  }));
  
  export const PromptText = styled(Typography)({
    fontSize: '1.1rem',
    color: '#898989',
    fontWeight: 400,
    letterSpacing: 0,
    fontFamily: fonts.primary,
    marginTop: '2rem'
  });
  