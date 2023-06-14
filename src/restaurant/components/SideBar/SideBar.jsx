import { useDispatch } from 'react-redux';
import { Box, Button, Drawer, Grid, List } from '@mui/material';
import { LogoutOutlined, HomeOutlined, LocalPizzaOutlined, TableBarOutlined, LunchDiningOutlined, BookOutlined } from '@mui/icons-material';

import { SideBarListItem } from './SideBarListItem';
import { logout } from '../../../store';
import './SideBar.css';

export const SideBar = ({ drawerWidth = 140 }) => {
  const dispatch = useDispatch();
 
  const onLogout = () => {
    dispatch( logout() );
  };

  return (
    <Box
      component='nav'
      sx={{ 
        width: { sm: drawerWidth },
      
      }}
    >

      <Drawer
        variant='permanent'
        open

        sx={{ 
          display: { xs: 'block'}, 
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Grid
          container
          sx={{ 
            backgroundColor: 'black',
            color: 'secondary.main',
            minHeight: '100vh',
          }}>

       
          <List disablePadding
            display={'flex'}
            alignItems={'center'}
            sx={{ width: drawerWidth, }}
          >
            <SideBarListItem height='15%'item={<LunchDiningOutlined  /> }/>

            <SideBarListItem item={<HomeOutlined  color='listItems' /> }/>
            <SideBarListItem item={<LocalPizzaOutlined color='listItems' /> }/>
            <SideBarListItem item={<TableBarOutlined color='listItems' />}/>
            <SideBarListItem item={<BookOutlined color='listItems' />}/>

            <Grid item alignItems={'end'}
              sx={{ height: '40%', display: 'flex', justifyContent: 'center'}}
            >
              <Button onClick={ onLogout }>
                <LogoutOutlined className='logout-icon' color='listItems' />
              </Button>
              
            </Grid>

          </List>
        </Grid>
      </Drawer>
    </Box>
  );
};
