import { SearchOutlined } from '@mui/icons-material';
import { MenuOutlined } from '@mui/icons-material';
import { AppBar, Box, Divider, Grid, IconButton, TextField, Toolbar, Typography, useMediaQuery } from '@mui/material';
import './NavBar.css';
import { NotificationsNoneOutlined } from '@mui/icons-material';
import { SettingsOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { togleSideBar } from '../../../store';

export const NavBar = ({ drawerWidth = 140 }) => {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const { activeView } = useSelector( state => state.restaurant );
  
  const togleDrawer = () => {
    dispatch( togleSideBar() );
  };

  return (
    <AppBar
    
      position='fixed'
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` }, 
        ml: { md: `${ drawerWidth }`},
        height: drawerWidth - 40,
        backgroundColor: 'white',
        boxShadow: '0px 0px 15px -1px rgba(0,0,0,0.1)',
        margin: 0,
        justifyContent: 'center'
      }}
    >
      <Toolbar>
        <IconButton
          onClick={ togleDrawer }
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
            width={{lg: '25%', xs: '35%'}} 
            color={'primary'}
            fontWeight={'bold'}
            variant='h6' 
            noWrap 
            component={'div'} 
            className='animate__animated animate__rubberBand'
          >
            { activeView } 
          </Typography>

          <Grid
            width={{lg: '75%', xs: '65%'}} 
            item
            boxSizing={'border-box'}
            display={'flex'}
            justifyContent={'end'} 
            sx={{ height: '40px'}}
          >
            {
              !isMobile && (
                
                <Grid 
                  item
                  className='borderInput'
                  alignItems={'center'}
                  component={'div'}
                  marginX={2}
                >
                  <SearchOutlined color='primary' sx={{opacity: 0.5, fontSize: 23}} />
                  <input
                    className='form-control noFocus'
                    placeholder='Search' 
                    type='search'
                  />
                </Grid>
                  
              )
            }
              
            <Grid 
              item
              display={'flex'}
              justifyContent={{lg: 'space-evenly', xs: 'center'}}
              alignItems={'center'}
              component={'div'}
              marginX={{lg: 2, xs: 0}}
            >
              <NotificationsNoneOutlined 
                color='primary' 
                sx={{opacity: 0.3,  marginRight: {lg: 2.5, xs: 1}}} />
              <SettingsOutlined color='primary' sx={{opacity: 0.3}} />
            </Grid>

            <Grid 
              item
              display={'flex'}
              justifyContent={'start'}
              alignItems={'center'}
              component={'div'}
              marginX={2}
            >
              <Box 
                sx={{
                  borderRadius: '50%',
                  backgroundColor: '#000',
                  height: '70%',
                  width: '1.6rem',
                  marginRight: 1.5
                }}
              >
              </Box>
              {
                !isMobile &&
                <Typography noWrap sx={{opacity: 0.5}} fontSize={16} color={'primary'}>Maycol Daniel</Typography>
              }
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>

    </AppBar>
  );
};
