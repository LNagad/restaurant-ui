import { Grid, Typography } from '@mui/material';
import './Food.css';
import { FoodGridItem } from '../components';

export const Food = () => {
  return (
    <Grid container
      xs={12}
      justifyContent={'space-evenly'}
    >
      <Grid item
        xs={12}
        justifyContent={'space-evenly'}
        padding={4}
      >
        <Typography fontSize={25} fontWeight={500}>Find the best foods 😋</Typography>
      </Grid>

      {/* //TODO: CATEGORY CARROUSEL */ }

      <Grid container justifyContent={'start'}>
        <FoodGridItem img='/public/assets/ella-olsson.jpg' />
        <FoodGridItem />
        <FoodGridItem />
        <FoodGridItem />
        <FoodGridItem />
        <FoodGridItem />
        <FoodGridItem />
        <FoodGridItem />
        <FoodGridItem />
        <FoodGridItem />
      </Grid>
      
    </Grid>
  );
};
