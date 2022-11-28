import React from 'react'
import NavBar from '../components/nav_bar';
import ResponsiveAppBar from '../components/responsive_app_bar';
import TeamCard from '../components/team-card';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';

export const LogIn = () => {
  return (
    <div className='navbar'>
    <ResponsiveAppBar id={1}/>
<div className="login">
      <h1 className='page__title'>Indica como quieres iniciar sesión</h1>
      </div>
      <div className="login">
      <Stack spacing={2}  direction='column'  alignItems="center">
      <Button variant='contained' href='/2'>ALUMNO</Button>
      <Button variant='contained' href='/3'>PROFESOR</Button>
      </Stack>
      </div>
    </div>
  )
}

export default LogIn
