import { Box, Grid, Typography } from '@mui/material';
import { LineChart, PieChart } from './Charts';

export const DashBoardCharts = () => {
  return (
    <Grid
      item
      xs={12}
      display={'flex'}
      marginBottom={1}
      padding={{ xs: 1, lg: 4}} 
      alignItems={'center'}
      flexWrap={'wrap'}
      justifyContent={ {lg: 'space-between', xs: 'center'}}
      boxSizing={'border-box'}
    >
      <Grid item 
        xs={12} lg={8} 
        padding={{ xs: 1, lg: 4}} 
        className="boxShadow">
        <Typography fontWeight={600} fontSize={26}>
          Today orders
        </Typography>
        <Box>
          <LineChart />
        </Box>
      </Grid>

      <Grid item xs={12} 
        lg={3.5}
        padding={{ xs: 1, lg: 4}} 
        className="boxShadow">
        <Typography fontWeight={600} fontSize={26}>
          Today orders
        </Typography>
        <Box>
          <PieChart />
        </Box>
      </Grid>
    
    </Grid>
  );
};
