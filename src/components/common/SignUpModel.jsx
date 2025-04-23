import React from "react";
import WithModalHOC from "../layouts/WithModalHOC";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { fonts } from "../ThemeRegistry/theme";
export const modalStyles = {
  box: {
    padding: { xs: "3rem 1rem 1rem", md: "1.5rem 3rem" },
    width: { xs: "100vw", md: "70vw" },
    height: "80vh",
    overflow: "auto",
  },
  closeBtn: {
    top: { xs: 40, md: 15 },
    right: { xs: 42, md: 20 },
  },
};

const SignUpModel = ({onSelectRole}) => {
  return (
    <Box sx={{ paddingX: "2%", paddingY: "1rem" }}>
      <Typography sx={{ textAlign: "center", fontSize: "1.3rem" }}>
        First, tell us who you are signing up as—
      </Typography>
      <Typography sx={{ textAlign: "center", fontSize: "1.3rem" }}>
        Customer or Corporate User—so we can tailor your experience.
      </Typography>
      <Box
        sx={{ mt: 5, width: "100%", height: '50vh', display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box sx={{ width: "35%", py: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Box
            component={"img"}
            src="/icons/costumer-person.svg"
            alt="costumer person"
          />
          <Typography sx={{ opacity: .8, color: '#1A1A1A', fontSize: '1.2rem', mt: 2 }}>Customer</Typography>
          <Typography sx={{ textAlign: 'center', fontFamily: fonts.primary, color: '#1A1A1A', fontSize: '1rem', }}>Discover exclusive deals and services tailored for you.</Typography>
          <Button onClick={() => onSelectRole("customer")} sx={{
            fontSize: '.75rem',
            backgroundColor: '#FFD300',
            padding: '9px 30px',
            borderRadius: '15px',
            '&:hover': {
              backgroundColor: '#FFD300',
            },
            textTransform: 'initial',
            color: '#1A1A1A',
            mt: 3
          }} variant="contained" > Join as a Customer</Button>
        </Box>
        <Box
          sx={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Box
            component={'img'}
            src="/icons/signup-vertical-line.svg"
            alt="vertical line"
          />
        </Box>
        <Box sx={{ width: "35%", py: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Box
            component={"img"}
            src="/icons/fontisto-person.svg"
            alt="fontisto person"
          />
          <Typography sx={{ color: '#1A1A1A', fontSize: '1.2rem', mt: 2 }}>Corporate User</Typography>
          <Typography sx={{ textAlign: 'center', fontFamily: fonts.primary, color: '#1A1A1A', fontSize: '1rem', }}>Manage your business and reach more customers.</Typography>
          <Button onClick={() => onSelectRole("corporate")} sx={{
            fontSize: '.75rem',
            backgroundColor: '#FFD300',
            padding: '9px 30px',
            borderRadius: '15px',
            '&:hover': {
              backgroundColor: '#FFD300',
            },
            textTransform: 'initial',
            color: '#1A1A1A',
            mt: 3
          }} variant="contained" > Get Started as a Business</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WithModalHOC(SignUpModel, modalStyles);
