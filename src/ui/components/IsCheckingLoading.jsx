import { CircularProgress, Grid } from '@mui/material';

export const IsCheckingLoading = () => {
  return (
    <Grid container
      spacing={ 0 }
      direction="column"
      alignItems='center'
      justifyContent='center'
      sx={{ 
        minHeight: '100vh', 
        backgroundColor: 'primary.secondary', padding: 4
      }}
    >
      <Grid container 
        direction={'row'}
        justifyContent={'center'}
      >
        <CircularProgress color='warning' />
  
      </Grid>
  
    </Grid>   
  );
};
