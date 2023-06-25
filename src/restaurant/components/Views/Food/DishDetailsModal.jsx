import { ShoppingCartOutlined } from '@mui/icons-material';
import {
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  Backdrop,
  Grid,
} from '@mui/material';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addCartItem, incrementCartItemsCounter } from '../../../../store';

export const DishDetailsModal = ({ open, handleToggle, data, isMobile, isWaiter }) => {
  const { id, name, ingredients, price, category, number_of_servings, img } = data;

  const dispatch = useDispatch();
  
  const onAddToCart = () => {
    dispatch( addCartItem({ id, name, ingredients, price, category, number_of_servings }));
    dispatch(incrementCartItemsCounter());
    handleToggle();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `${isMobile ? '95vw' : '30vw'}`,
    bgcolor: '#f2f2f3',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column'
  };
  
  const TypographyProps = {
    id: 'transition-modal-description',
    sx: { mt: 2 }
  };
  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleToggle}
        disableAutoFocus={true}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid item xs={12} display={'flex'} justifyContent={'center'}>
              <img width={'80%'} src={!img ? '/public/assets/ella-olsson.jpg' : img} />
            </Grid>

            <Box p={3}>
              <Grid container bgcolor={'#fff'} p={4}>
                <Typography fontSize={30} fontWeight={600} id="transition-modal-title" variant="h6" component="h2">
                  {name}
                </Typography>

                <Grid item xs={12} display={'flex'} justifyContent={'space-between'}>
                  <Typography {...TypographyProps} sx={{ opacity: 0.5 }}>
                    {ingredients &&
                      ingredients.map((ing, index) => `${ing.name}${ingredients.length - 1 > index ? ', ' : ''}`)}
                  </Typography>
                </Grid>

                <Grid item xs={12} >
                  <Typography {...TypographyProps} sx={{ opacity: 0.5 }}>
                    {category}
                  </Typography>

                  <Typography {...TypographyProps} sx={{ opacity: 0.5 }} >
                    for {number_of_servings} people
                  </Typography>
                </Grid>

                <Grid item xs={12} mt={4} display={'flex'} justifyContent="space-between">
                  <Typography {...TypographyProps} fontSize={22}>
                    Price:
                  </Typography>

                  <Typography {...TypographyProps} fontSize={22} fontWeight={600} color="green">
                    ${price}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            {
              (isWaiter) &&
              <Grid item xs={12} bgcolor={'#fff'} p={4} display='flex' justifyContent={'space-between'}>
                <Button variant="outlined" color="error" onClick={handleToggle}>
                Cancel
                </Button>

                <Button variant="outlined" color="orderFinished" onClick={onAddToCart}>
                  <ShoppingCartOutlined /> Add to cart
                </Button>
              </Grid>
            }
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

DishDetailsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isWaiter: PropTypes.bool.isRequired,
};
