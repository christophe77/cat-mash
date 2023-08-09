import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../assets/images/logo.svg';

export default function Header() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <img src={logo} alt="logo" width={150} height={60}/>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Cat Mash
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
