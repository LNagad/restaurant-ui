import { Grid, Typography, useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import 'animate.css';
'';
export const AuthLayout = ({ children }) => {

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  
  const { pathname } = useLocation();
  const isLogin = pathname === '/auth/login';
  
  return (
    <Grid container
      spacing={ 0 }
      direction='column'
      justifyContent='center'
      alignItems={'center'}
      sx={{ 
        minHeight: '100vh',
        backgroundColor: '#E7E7EA',
      }}
    >
      <Grid item
        className='animate__animated animate__fadeIn '
        xs={ 12 }
        sx={{
          height: '100vh',
          width: { xs: '100%', sm: 450 },
          backgroundColor: '#ECEEF1',
          padding: { xs: 1, md: 3},
          borderRadius: 7,
        }}
      >
        <Grid container
          className='box-shadow2 '
          sx={{
            width: { sm: '100%' },
            height: `${isSmallScreen && (isLogin ? '68vh' : '48vh') }`,
            // height: '70vh',
            backgroundColor: 'white',
            borderRadius: '20px 20px 0px 0px'
          }}
        >
          <Grid container
            justifyContent='center'
            alignItems={'center'}
            display='flex'
            flexDirection='column'
            height={`${isSmallScreen && (isLogin ? '82%' : '82%') }`}
            flexWrap={'wrap'}
            margin={`${!isSmallScreen && '40px 0px' }`}
          >
            <img 
              style={{ 
                width: `${isSmallScreen ? (!isLogin ? '35%' : '50%' ) : '50%' }`, 
                display: 'block',
                marginBottom: `${isSmallScreen ? (!isLogin ? 0 : '40px' ) : '40px' }`
              }}
              src={ '/assets/chinese-food.png'} 
              alt="Restaurant image" 
            />

            <p
              style={{ 
                fontSize: '40px'
              }} 
              className='auth-restaurant-brand'
            >Restaurant App!
            </p>

          </Grid>

          <Grid container
            justifyContent='space-between'
            display='flex'
            width='100%'
            paddingX={8}
            height={`${isSmallScreen && (isLogin ? '8%' : '') }`}
          >

            <NavLink
              className={({ isActive }) =>
              // { console.log(isActive);}
                `nav-item-link ${isActive ? 'auth-active-border' : ''}`
              }
              to="/auth/login"
            > 
              <Typography 
                variant='h6'
                fontSize={20} 
                fontWeight={600}     
                paddingBottom={{xs: 1}}
              >Login
              </Typography>
            </NavLink>

            <NavLink
              className={({ isActive }) =>`nav-item-link ${isActive ? 'auth-active-border' : ''}`}
              to="/auth/signup"
            > 
              <Typography 
                variant='h6'
                fontSize={20} 
                paddingBottom={{xs: 1}}
                fontWeight={600}
              >Signup
              </Typography>
                     
            </NavLink>
                 
          </Grid>
        </Grid>

        { children }

      </Grid>  
    </Grid>
  );
};
