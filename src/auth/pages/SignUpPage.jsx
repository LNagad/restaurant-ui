
import { Alert, Button, Grid, TextField, useMediaQuery } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StartSignupWithEmailAndPassword } from '../../store/slices/auth/thunks';
import { IsCheckingLoading } from '../../ui';

const initialState = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
};

const validationsForm = {
  email: [ (value) => value.includes('@'), 'The email must have @' ],
  password: [ (value) => value.length >= 8, 'Password must be at least 8 characters long' ],
  name: [ (value) => value.length >= 8, 'The name is required' ],
  confirmPassword: ['', 'The password must match'],
  phone: [ (value) => value.length >= 10, 'The phone number is required' ],
};


export const SignUpPage = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const { errorMessage, status } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const { formState, onChangeInput, 
    isFormValid, nameValid, emailValid, phoneValid, passwordValid, confirmPasswordValid } 
    = useForm(initialState, validationsForm);

  const { name, email, phone, password, confirmPassword } = formState;
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    if (!isFormValid ) return;

    dispatch( StartSignupWithEmailAndPassword(formState) );
  };

  
  if (status === 'checking') {
    return <IsCheckingLoading />;
  }
  console.log(errorMessage);

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
          
        <form onSubmit={ onSubmitForm } style={{width: '100%'}}>
          
          {errorMessage != null && isFormSubmitted && (
            errorMessage.map( error => (
              <Grid item xs={12} key={error}>
                <Alert severity="error">{error}</Alert>
              </Grid>
            ))
          )}

          <Grid item xs={ 12 } >
            <TextField 
              label='Name'
              type='text'
              placeholder='yourName'
              variant='standard'
              name='name'
              value={ name }
              onChange={ onChangeInput }
              error={isFormSubmitted && (!!nameValid)}
              helperText={isFormSubmitted && nameValid}
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
              value={ email }
              onChange={ onChangeInput }
              error={isFormSubmitted && (!!emailValid)}
              helperText={isFormSubmitted && emailValid}
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
              value={ phone }
              onChange={ onChangeInput }
              error={isFormSubmitted && (!!phoneValid)}
              helperText={isFormSubmitted && phoneValid}
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
              value={ password }
              onChange={ onChangeInput }
              error={isFormSubmitted && (!!passwordValid) }
              helperText={isFormSubmitted && passwordValid}
              fullWidth
              sx={{ fontWeight: 'bold' }}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: {md: 1} }}>
            <TextField 
              label='Confirm Password'
              type='password'
              placeholder='Confirm your password'
              variant='standard'
              name='confirmPassword'
              value={ confirmPassword }
              onChange={ onChangeInput }
              error={isFormSubmitted && (confirmPasswordValid || passwordValid) != null}
              helperText={isFormSubmitted && (confirmPasswordValid || passwordValid)}
              fullWidth
              sx={{ fontWeight: 'bold' }}
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: {md: 4} }}>
            <Button
              variant='contained'
              className='btn-grad'
              type='submit'
              fullWidth>
            SignUp
            </Button>
          </Grid>
        </form>
      
      </Grid>
    </AuthLayout>
  );
};
