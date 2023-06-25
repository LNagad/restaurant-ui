
import { Circle } from '@mui/icons-material';
import { CloseOutlined } from '@mui/icons-material';
import {Box,Modal, Fade, Button, Typography, Backdrop, Grid, TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText} from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setInitialState, startUpdatingOrder, toggleEditModal } from '../../../../store';
import { OrderDishItem } from './OrderDishItem';
import { showAlert } from '../../../../helpers/showAlert';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column'
};

const TypographyProps = {
  id: 'transition-modal-description',
  sx: {mt: 2 }
};

export const EditOrderModal = () => {

  const dispatch = useDispatch();
  const { token } = useSelector( state => state.auth );  

  const { isEditModalOpen, currentEditData} = useSelector( state => state.restaurantModal );  
  const { id, createdFormat, dishes, status, subtotal } = currentEditData;

  const [itemDeleted, setItemDeleted] = useState(false);

  const colorStatus = status === 'En proceso' ? 'orderInProgress' : 'orderFinished';
  
  const onToggleModal = () => {
    setItemDeleted(false);
    dispatch( toggleEditModal() );
  };

  const onUpdateClick = async() => {
    const resp = await dispatch( startUpdatingOrder(currentEditData, token) );
    if (resp) {
      dispatch( setInitialState() );
      showAlert({title: 'Updated!',text: `Order #${id} has been updated.`});
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isEditModalOpen}
        onClose={onToggleModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isEditModalOpen}>
       
          <Box sx={style}>           
            <Grid container p={4} >
              <Typography fontSize={30} fontWeight={600} id="transition-modal-title" variant="h6" component="h2">
              Order Details
              </Typography>
             
              <Grid item xs={12} display={'flex'} justifyContent={'space-between'}>
                <Typography {...TypographyProps}>Order # { id }</Typography>
                <Typography  {...TypographyProps}>{createdFormat}</Typography>
              </Grid>

              <Grid item xs={12} mb={2} display={'flex'} justifyContent={'start'}>               
                <Typography {...TypographyProps}> 
                  <Circle sx={{fontSize: 18, marginRight: 1, mb: 0.2}} color={colorStatus} />
                  { status }
                </Typography>
              </Grid>

              <Grid item xs={12} mb={2} >
                {
                  dishes?.map(dish => (
                    <OrderDishItem 
                      key={dish.id}
                      title={dish.name}
                      id={dish.id}
                      img={dish?.img}
                      isMobile={false}
                      handleToggle={onToggleModal}
                      handleDeleted={ () => setItemDeleted(true)}
                    />
                  ))
                }
              </Grid>

                
              <Grid item xs={12} mb={4} display={'flex'} flexDirection={'column'} alignItems={'end'}>
                <Typography fontSize={22} fontWeight={500}>SubTotal</Typography>
                <Typography fontWeight={500}>${subtotal}</Typography>
              </Grid>

              <Grid item xs={12} display={'flex'} flexDirection={'column'} alignItems={'start'}>
                <Button 
                  onClick={onUpdateClick} 
                  disabled={!itemDeleted}
                  fullWidth 
                  variant='contained' 
                  color='success'
                >Update</Button>
              </Grid>

            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
