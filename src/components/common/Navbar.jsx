"use client";
import React, {useState, useEffect} from "react";
import { 
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Stack,
  styled
} from "@mui/material";
import { fonts } from "../ThemeRegistry/theme";
import { useSelector } from "react-redux";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  marginTop: theme.spacing(1),
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 2,
  borderRadius: 12,
  backgroundColor: 'white',
  boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.1)',
  position: 'static',
}));

const NavToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: 'center',
  justifyContent: "space-between",
  gap: 16,
});

const UserInfoContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const NavIcon = styled('img')({
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const GreetingText = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  lineHeight: '1rem',
  color: theme.palette.grey[900],
}));

const Subtext = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  color: theme.palette.grey[600],
}));

const DateText = styled(Typography)(({ theme }) => ({
  color: '#FFD300',
  fontSize: "0.75rem",
  opacity: 0.8,
}));

const UserName = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  lineHeight: '20px',
  fontWeight: 500,
  color: '#1A1A1A',
  fontFamily: fonts.primary,
}));

const ProfileTitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.525rem',
  fontWeight: 500,
  color: theme.palette.grey[900],
  textTransform: 'uppercase',
}));

const Navbar = () => {
  let user = useSelector((state) => state.auth.user);;
  useEffect(() => {
    if(!user) {
      user = JSON.parse(localStorage.getItem('user'));
      console.log("user", user);
    }
  }, []);
  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${user?.image}`;
  return (
    <StyledAppBar>
      <NavToolbar>
        <div>
          <GreetingText>
            Hello, <Subtext component="span">{user?.name.split(' ')[0]}</Subtext>
          </GreetingText>
          <DateText variant="caption">{new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</DateText>
        </div>

        <Stack width={'50%'} direction="row" justifyContent={'space-between'} alignItems="center" mr={4}>
          <NavIcon src="/icons/buy-sell-link.svg" alt="Buy/Sell" />
          <NavIcon src="/icons/shop-link.svg" alt="Shop" />
          <NavIcon src="/icons/offer-link.svg" alt="Offers" />
          <NavIcon src="/icons/cart-link.svg" alt="Cart" />

          <UserInfoContainer>
            <Avatar alt="Andrew Smith" src={imageSrc} />
            <div>
              <UserName>{user?.name}</UserName>
              <ProfileTitle>{user?.type} Profile</ProfileTitle>
            </div>
          </UserInfoContainer>
        </Stack>
      </NavToolbar>
    </StyledAppBar>
  );
};

export default Navbar;