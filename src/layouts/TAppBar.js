import AppBar from '@mui/material/AppBar';
import Logo from 'components/Logo';
import React from 'react';

function TAppBar() {
  return (
    <AppBar position='sticky'>
      <Logo />
    </AppBar>
  );
}

export default TAppBar;
