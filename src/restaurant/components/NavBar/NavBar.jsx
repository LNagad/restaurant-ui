import { LogoutOutlined } from '@mui/icons-material';
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Box, Divider, Grid, IconButton, Toolbar, Typography } from '@mui/material';

export const NavBar = ({ drawerWidth = 140 }) => {
  return (
    <AppBar
      position='fixed'
      sx={{ 
        width: { sm: `calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth}px`},
        height: { sm: `calc(${drawerWidth}px - 40px)` },
        backgroundColor: 'white',
        boxShadow: 'none'
      }}
    >
      <Toolbar sx={{ height: 100}}>
        <IconButton
          color='primary'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none'}}}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography 
            color={'primary'}
            variant='h6' 
            noWrap 
            component={'div'} 
            className='animate__animated animate__rubberBand'
          >
                  RestaurantApp
          </Typography>

          
        </Grid>
      </Toolbar>
      
      <Divider/>
    </AppBar>
  );
};
