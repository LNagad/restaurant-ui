import { Grid, Typography } from '@mui/material';

export const SelectTable = () => {
  return (
    <Grid container>
      <Grid item xs={12} padding={4}>
        <Typography
          fontSize={25} fontWeight={500}>Select table to add order
        </Typography>
      </Grid>

      <Grid
        container
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-evenly'}
        flexWrap={'wrap'}
      >
        <Grid item xs={12} md={5} lg={2.6} 
          display={'flex'}
          alignItems={'center'}
          flexDirection={'column'}
          border='1px solid #000'
          borderRadius={25}
        >
          <img style={{width: '50%'}}  src='/assets/round-table.png'/>
          <Typography>Table #1</Typography>
        </Grid>
      </Grid>

     
    </Grid>
  );
};
