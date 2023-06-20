
import { Alert, Button, Grid, TextField, useMediaQuery } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

import { useDispatch, useSelector } from 'react-redux';
import { StartSignInWithEmailAndPassword } from '../../store/';
import { useForm } from '../../hooks';

const initialState = {email: '', password: ''};
export const LoginPage = () => {
  
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const dispatch = useDispatch();

  const { errorMessage } = useSelector(state => state.auth);
  
  const { email, password, onChangeInput } = useForm(initialState);

  const onLogin = () => {
    
    dispatch( StartSignInWithEmailAndPassword({email, password}) );
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
          {errorMessage?.map( error => (
            <Alert sx={{mb: 0.5}} key={error} severity='error'>{error}</Alert>
          ))}
        </Grid>
        <Grid item xs={ 12 } >
          <TextField 
            label='Email'
            type='email'
            placeholder='yourEmail@email.com'
            variant='standard'
            name='email'
            value={email}
            onChange={onChangeInput}
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
            value={password}
            onChange={onChangeInput}
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
