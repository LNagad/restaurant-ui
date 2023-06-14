import { Box, Toolbar, useMediaQuery } from '@mui/material';
import { NavBar, SideBar } from '../components';

let drawerWidth = 140;

export const DashboardLayout = ({ children, title }) => {


  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  if (isMobile) drawerWidth -= 80;
  
  return (
    <Box
      sx={{
        display: 'flex'
      }}
      className='animate__animated animate__fadeIn animate__faster'
    >
      {/* 
      //TODO: NavBar
      //TODO: SideBar 
      */}

      <SideBar drawerWidth={ drawerWidth } />
      <NavBar drawerWidth={ drawerWidth } title={ title } />

      <Box
        component={'main'}
        marginLeft={{ sm: '100px', lg: `${drawerWidth}px`}}
        sx={{ flexGrow: 1, padding: 3 }}
      >
        <Toolbar />

        { children }
      </Box>

    </Box>
  );
};
