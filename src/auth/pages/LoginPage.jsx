
import { Button, Grid, TextField, useMediaQuery } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

import { useDispatch } from 'react-redux';
import { login } from '../../store/';


export const LoginPage = () => {
  
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const dispatch = useDispatch();

  const onLogin = () => {
    dispatch( login() );
  };

  return (
    <AuthLayout title="Login">
      <Grid container
        className='box-shadow2'        
        sx={{
          width: { sm: '100%' },
          height: `${isSmallScreen ? '30vh' : ''}`,
          backgroundColor: 'white',
          padding: 3,
          borderRadius: '0px 0px 20px 20px'
        }}>

        <Grid item xs={ 12 } >
          <TextField 
            label='Email'
            type='email'
            placeholder='yourEmail@email.com'
            variant='standard'
            name='email'
            fullWidth
            
          />
        </Grid>

        <Grid item xs={ 12 } sx={{ mt: 2 }}>
          <TextField 
            label='Password'
            type='password'
            placeholder='Your password'
            variant='standard'
            name='password'
            fullWidth
            sx={{ fontWeight: 'bold' }}
          />
        </Grid>

        <Grid item xs={ 12 } sx={{ mt: 2 }}>
          <Button
            onClick={ onLogin }
            variant='contained'
            className='btn-grad'
            fullWidth>
            Login
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
