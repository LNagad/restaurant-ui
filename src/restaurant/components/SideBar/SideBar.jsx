import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Drawer, Grid, List, useMediaQuery, useTheme } from '@mui/material';
import { LogoutOutlined, HomeOutlined, LocalPizzaOutlined, TableBarOutlined, LunchDiningOutlined, BookOutlined } from '@mui/icons-material';

import { SideBarListItem } from './SideBarListItem';
import { togleSideBar, StartLogout } from '../../../store';
import './SideBar.css';

export const SideBar = ({ drawerWidth = 140 }) => {
  
  const dispatch = useDispatch();
  const { activeView, isSideBarOpen } = useSelector( state => state.restaurant );
  
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  
  if (isMobile) drawerWidth -= 80;

  const onLogout = () => {
    dispatch( StartLogout() );
  };

  const sideBarItems = [
    { item: <HomeOutlined color={activeView === 'DashBoard' ? 'white' : 'listItems'} />, viewName: 'DashBoard' },
    { item: <LocalPizzaOutlined color={activeView === 'Food' ? 'white' : 'listItems'} />, viewName: 'Food' },
    { item: <TableBarOutlined color={activeView === 'Tables' ? 'white' : 'listItems'} />, viewName: 'Tables' },
    { item: <BookOutlined color={activeView === 'Orders' ? 'white' : 'listItems'} />, viewName: 'Orders' }
  ];

  const togleDrawer = () => {
    dispatch( togleSideBar() );
  };

  return (
    <Box component='nav'
      sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isSideBarOpen}
        onClose={ togleDrawer }
        className='hola'
        sx={{ 
          display: { xs: 'block'}, 
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, minHeight: '100%' }
        }}
      >
        <Grid
          container
          sx={{ 
            backgroundColor: 'black',
            color: 'secondary.main',
            height: '100%'
          }}>
       
          <List disablePadding
            display={'flex'}
            sx={{ width: drawerWidth, }}
          >
            <SideBarListItem height='15%' item={<LunchDiningOutlined/>} viewName='DashBoard'/>

            {sideBarItems.map((sidebarItem, index) => (
              <SideBarListItem
                key={index}
                item={sidebarItem.item}
                viewName={sidebarItem.viewName}
              />
            ))}

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
