import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../../assets/images/logo.svg';

interface HeaderProps {
  hasButtonReturn: boolean;
}
export default function Header({ hasButtonReturn }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          {hasButtonReturn && (
            <Button variant='contained' onClick={() => navigate('/')}>
              Retour
            </Button>
          )}

          <img src={logo} alt='logo' width={150} height={60} />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Cat Mash
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
