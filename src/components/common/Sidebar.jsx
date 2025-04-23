"use client"

import React, { useState } from 'react';
import { Box, Tooltip, Typography, Divider, Stack, styled } from '@mui/material';

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 90,
  height: '95vh',
  backgroundColor: '#fff',
  borderRight: '1px solid #e0e0e0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2, 0),
  paddingTop: theme.spacing(3),
  borderRadius: 16,
  overflowY: 'auto',
  boxShadow: '0px 0px 10px rgba(0,0,0,0.05)',
  scrollbarWidth: 'none', 
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none', 
  },
}));

const SectionLabel = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  fontSize: '10px',
  color: theme.palette.grey[500],
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  width: '60%',
  margin: theme.spacing(2, 0),
}));

const StyledMenuItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  cursor: 'pointer',
}));

const MENU_ITEMS = [
  { 
    section: 'MAIN',
    items: [
      { title: 'Dashboard', icon: '/icons/home-icon.svg', activeIcon: '/icons/home-active-icon.svg', name: 'home' },
      { title: 'Message', icon: '/icons/message-icon.svg', activeIcon: '/icons/message-active-icon.svg', name: 'message' },
      { title: 'Add Car', icon: '/icons/add-car-icon.svg', activeIcon: '/icons/add-car-active-icon.svg', name: 'add-car' },
      { title: 'Request', icon: '/icons/reuqest-icon.svg', activeIcon: '/icons/reuqest-active-icon.svg', name: 'request' },
      { title: 'Wishlist', icon: '/icons/wishlist-icon.svg', activeIcon: '/icons/wishlist-active-icon.svg', name: 'wishlist' },
      { title: 'Notifications', icon: '/icons/notification-icon.svg', activeIcon: '/icons/notification-active-icon.svg', name: 'notifications' },
      { title: 'Order', icon: '/icons/order-icon.svg', activeIcon: '/icons/order-active-icon.svg', name: 'order' },
      { title: 'Vouchar', icon: '/icons/voucher-icon.svg', activeIcon: '/icons/voucher-active-icon.svg', name: 'voucher' },
    ]
  },
  {
    section: 'CONTACT',
    items: [
      { title: 'Profile', icon: '/icons/profile-icon.svg', activeIcon: '/icons/profile-active-icon.svg', name: 'profile' },
      { title: 'Logout', icon: '/icons/logout-icon.svg', name: 'logout' },
    ]
  }
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleMenuClick = (name) => {
    setActiveItem(name);
  };

  const renderMenuItems = (items) => (
    <Stack spacing={0} alignItems="center">
      {items.map((item) => (
        <Tooltip key={item.name} title={item.title} placement="right">
          <StyledMenuItem active={activeItem === item.name}
                  onClick={() => handleMenuClick(item.name)}>
            <Box
              component="img"
              src={activeItem === item.name ? item.activeIcon : item.icon}
              alt={item.title}
            />
          </StyledMenuItem>
        </Tooltip>
      ))}
    </Stack>
  );

  return (
    <SidebarContainer>
      <Box component="img" src="/icons/sidebar-logo.svg" alt="logo" width={40} />

      {MENU_ITEMS.map((section) => (
        <React.Fragment key={section.section}>
          <StyledDivider />
          <SectionLabel variant="caption">
            {section.section}
          </SectionLabel>
          {renderMenuItems(section.items)}
        </React.Fragment>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;