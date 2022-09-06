import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { SignupButton } from './navbuttons/signup-button'
import { LoginButton } from './navbuttons/login-button';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

export const UnsignedNavbar = () => {

  return (
    <Toolbar>
      <Button
        component={Link}
        to='/'
      >
      <img src="/logo.svg" alt="logo" height={40}/>
      </Button>
      <Button
        color='inherit'
        component={Link}
        to='/about'
        >About Us</Button>
      <LoginButton />
      <SignupButton />
    </Toolbar>
  )
}