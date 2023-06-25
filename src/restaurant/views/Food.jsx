import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  FoodFloatingCart,
  FoodGridItem,
  DishDetailsModal,
  SaveDishModal,
} from '../components';
import './Food.css';

export const Food = () => {
  const { role } = useSelector((state) => state.auth);
  const { restaurantData } = useSelector((state) => state.restaurant);

  const { dishes } = restaurantData;
  const isWaiter = role === 'WAITER';

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const [open2, setOpen2] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Grid container>
      <Grid item xs={12} padding={4} display={'flex'} justifyContent={'space-between'}>
        <Typography fontSize={25} fontWeight={500}>
          Find the best foods 😋
        </Typography>
        <Button 
          onClick={() => setOpen2(!open2)}
          variant='outlined' 
          color='warning'>Add new Dish</Button>
      </Grid>

      {/* //TODO: CATEGORY CARROUSEL */}

      <Grid
        container
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-evenly'}
        flexWrap={'wrap'}
      >
        {dishes?.result?.map((dish) => (
          <FoodGridItem
            key={dish.id}
            dish={dish}
            isMobile={isMobile}
            handleToggle={handleToggle}
            setModalData={setModalData}
          />
        ))}
      </Grid>

      <SaveDishModal 
        open={open2}
        handleToggle={() => setOpen2(!open2)}
        isMobile={isMobile} />

      <DishDetailsModal
        open={open}
        handleToggle={handleToggle}
        data={modalData}
        isMobile={isMobile}
        isWaiter={isWaiter}
      />
     
      {
        isWaiter &&
        <>
          <FoodFloatingCart isMobile={isMobile} />
        </>
      }
    </Grid>
  );
};
