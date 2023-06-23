import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  Backdrop,
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  CircularProgress,
} from '@mui/material';

import { CartItem } from './CartItem';
import { clearCart, endLoading, startLoading, startSendOrder } from '../../../../store';

export const CartModal = ({ open, handleToggle, isMobile }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: `${isMobile ? '95vw' : '30vw'}`,
    bgcolor: '#f2f2f3',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
  };

  const TypographyProps = {
    id: 'transition-modal-description',
    sx: { mt: 2 },
  };

  const { cartItems, restaurantData } = useSelector( (state) => state.restaurant );
  const { token } = useSelector( (state) => state.auth );
  const dispatch = useDispatch();

  const { tables } = restaurantData;
  const tablesAvailable = tables?.result?.filter((table) => table.status != 'Atendida');
  const canSendOrder = tablesAvailable.length > 0; 

  const [table, setTable] = useState('');
  const [tableSelected, setTableSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setTableSelected(true);
    setTable(event.target.value);
  };
  
  const onSendOrderClick = async() => {
    setIsLoading(!isLoading); 
    const resp  = await dispatch( startSendOrder( table, cartItems, token ));
    if (resp) {
      setIsLoading(false); 
      dispatch( clearCart() );
      handleToggle();
    }
    
  };
  

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleToggle}
        disableAutoFocus
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
            <Grid item xs={12}>
              <Typography
                {...TypographyProps}
                textAlign={'center'}
                fontWeight={500}
                fontSize={26}
              >
                Cart dishes
              </Typography>
            </Grid>

            <Box p={3}>
              <Grid container bgcolor={'#fff'} p={4}>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    isMobile={isMobile}
                    handleToggle={handleToggle}
                  />
                ))}
              </Grid>

              {canSendOrder && (
                <Grid container bgcolor={'#fff'} p={4} mt={1}>
                  <FormControl fullWidth required>
                    <InputLabel>Table</InputLabel>
                    <Select value={table} label="Table" onChange={handleChange}>
                      {tablesAvailable.map((table) => (
                        <MenuItem key={table.id} value={table.id}>
                          {table.description}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              )}
            </Box>

            <Grid
              item
              xs={12}
              bgcolor={'#fff'}
              p={4}
              display={'flex'}
              justifyContent={'space-between'}
            >
              <Button variant="outlined" color="error" onClick={handleToggle}>
                Close
              </Button>

              <Button
                variant="outlined"
                color="orderFinished"
                disabled={!tableSelected || !canSendOrder}
                onClick={onSendOrderClick}
                style={{ position: 'relative' }}
              >Send order 
                {(isLoading) && <CircularProgress color="orderFinished" size={26} sx={{ml: 1}}/>}
                
              </Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

CartModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};
