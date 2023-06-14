
import { Button, Grid, TextField, useMediaQuery } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';


export const SignUpPage = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <AuthLayout title="Signup">
      <Grid container
        className='box-shadow2 animate__animated'
        sx={{
          width: { sm: '100%' },
          height: `${isSmallScreen ? '50vh' : ''}`,
          backgroundColor: 'white',
          padding: 3,
          borderRadius: '0px 0px 20px 20px'
        }}>

        <Grid item xs={ 12 } >
          <TextField 
            label='Name'
            type='text'
            placeholder='yourName'
            variant='standard'
            name='name'
            fullWidth
          />
        </Grid>

        <Grid item xs={ 12 } sx={{ mt: {md: 1} }}>
          <TextField 
            label='Email'
            type='email'
            placeholder='yourEmail@email.com'
            variant='standard'
            name='email'
            fullWidth
          />
        </Grid>

        <Grid item xs={ 12 } sx={{ mt: {md: 1} }}>
          <TextField 
            label='Phone number'
            type='number'
            placeholder='8094581248'
            variant='standard'
            name='phone'
            fullWidth
          />
        </Grid>

        <Grid item xs={ 12 } sx={{ mt: {md: 1} }}>
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

        <Grid item xs={ 12 } sx={{ mt: {md: 4} }}>
          <Button
            variant='contained'
            className='btn-grad'
            fullWidth>
            SignUp
          </Button>
        </Grid>
      </Grid>
    </AuthLayout>
  );
};
