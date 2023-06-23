import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import {
  FoodFloatingCart,
  FoodGridItem,
  DishDetailsModal,
} from '../components';
import './Food.css';

export const Food = () => {
  const { role } = useSelector((state) => state.auth);
  const { restaurantData } = useSelector((state) => state.restaurant);

  const { dishes } = restaurantData;
  const isWaiter = role === 'WAITER';

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Grid container>
      <Grid item xs={12} padding={4}>
        <Typography fontSize={25} fontWeight={500}>
          Find the best foods 😋
        </Typography>
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
            img="/public/assets/ella-olsson.jpg"
          />
        ))}
      </Grid>

      <DishDetailsModal
        open={open}
        handleToggle={handleToggle}
        data={modalData}
        isMobile={isMobile}
        isWaiter={isWaiter}
      />

      <FoodFloatingCart isMobile={isMobile} />
    </Grid>
  );
};
