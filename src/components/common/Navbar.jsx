"use client";
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import { 
  Button,
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
  justifyContent: 'flex-end'
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
  const reduxUser = useSelector((state) => state.auth.user);
  const [user, setUser] = useState(reduxUser);
  const router = useRouter();
  useEffect(() => {
    if (!reduxUser) {
      console.log("Redux user", reduxUser);
      const storedUser = localStorage.getItem("user");
      console.log("LocalStorage user", storedUser);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [reduxUser]);
  const imageSrc = `${process.env.NEXT_PUBLIC_API_URL}${user?.image}`;
  return (
    <StyledAppBar>
      <NavToolbar>
      {user ? (
          <div>
            <GreetingText>
              Hello, <Subtext component="span">{user?.name?.split(' ')[0]}</Subtext>
            </GreetingText>
            <DateText variant="caption">
              {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
            </DateText>
          </div>
        ) : (
          <div>
            <GreetingText>Welcome!</GreetingText>
            <DateText variant="caption">
              {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
            </DateText>
          </div>
        )}

        <Stack width={'50%'} direction="row" justifyContent={'space-between'} alignItems="center" mr={4}>
          <NavIcon src="/icons/buy-sell-link.svg" alt="Buy/Sell" />
          <NavIcon src="/icons/shop-link.svg" alt="Shop" />
          <NavIcon src="/icons/offer-link.svg" alt="Offers" />
          <NavIcon src="/icons/cart-link.svg" alt="Cart" />

          {user && <UserInfoContainer>
            <Avatar alt="Andrew Smith" src={imageSrc} />
            <div>
              <UserName>{user?.name}</UserName>
              <ProfileTitle>{user?.type} Profile</ProfileTitle>
            </div>
          </UserInfoContainer>}

          {!user && <UserInfoContainer>
            <Button
            variant="contained"
            onClick={() => router.push('/login')}
            sx={{
              backgroundColor: '#FFD600',
              color: 'black',
              borderRadius: '10px',
              fontWeight: '400',
              height: '40px',
              width:'25%',
              textTransform: 'none',
              px: 2,
              '&:hover': {
                backgroundColor: '#FFC000',
              },
            }}
          >
            Login
          </Button>
            <Button
            variant="contained"
            onClick={() => router.push('/signup')}
            sx={{
              backgroundColor: '#FFD600',
              color: 'black',
              borderRadius: '10px',
              fontWeight: '400',
              height: '40px',
              width:'30%',
              textTransform: 'none',
              px: 2,
              '&:hover': {
                backgroundColor: '#FFC000',
              },
            }}
          >
            Register
          </Button>
        </UserInfoContainer>

        }
        </Stack>
      </NavToolbar>
    </StyledAppBar>
  );
};

export default Navbar;