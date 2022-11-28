import React from 'react'
import NavBar from '../components/nav_bar';
import ResponsiveAppBar from '../components/responsive_app_bar';
import TeamCard from '../components/team-card';
import Stack from '@mui/material/Stack';

export const HomePage = () => {
  const greeting = 'Hello World';
  const goodbye = 'Goodbye World';
  return (
    <div className='navbar'>
      {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        }
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> */}
    <ResponsiveAppBar />
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Página de Inicio</h2>
    </div>
    <div className='team'>
    <Stack spacing={2} direction='row'  alignItems="center">
      <TeamCard dataFromParent = {greeting}/>
      <TeamCard dataFromParent = {goodbye}/>
      <TeamCard dataFromParent = {greeting}/>
      <TeamCard dataFromParent = {goodbye}/>
    </Stack>
    {/* <Stack spacing={2} direction='row'  alignItems="center">
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </Stack>
    <Stack spacing={2} direction='row'  alignItems="center">
      <TeamCard />
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </Stack> */}
      </div>  
    </div>
  )
}

export default HomePage
