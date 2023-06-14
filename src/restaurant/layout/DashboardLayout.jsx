import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawerWidth = 140;

export const DashboardLayout = ({ children }) => {

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
      <NavBar drawerWidth={ drawerWidth }/>
      <Box
        component={'main'}
        sx={{ flexGrow: 1, padding: 3 }}
      >
        <Toolbar />

        { children }
      </Box>

    </Box>
  );
};
