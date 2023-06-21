import { Grid, Typography } from '@mui/material';
import './Food.css';
import { FoodGridItem } from '../components';
import { useSelector } from 'react-redux';

export const Food = () => {
  const { restaurantData } = useSelector( state => state.restaurant );
  const { dishes } = restaurantData;

  return (
    <Grid container
    >
      <Grid item
        xs={12}
        padding={4}
      >
        <Typography fontSize={25} fontWeight={500}>Find the best foods 😋</Typography>
      </Grid>

      {/* //TODO: CATEGORY CARROUSEL */ }

      <Grid 
        container 
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-evenly'}
        flexWrap={'wrap'}
      >
        {
          dishes.result.map( dish => (

            <FoodGridItem key={dish.id} dish={dish} img='/public/assets/ella-olsson.jpg' />
          ))
        }
      </Grid>
      
    </Grid>
  );
};
