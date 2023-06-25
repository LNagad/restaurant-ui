import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@mui/material';
import { RemoveOutlined } from '@mui/icons-material';
import { decrementCartItemsCounter, removeDish } from '../../../../store';

export const OrderDishItem = ({ title, isMobile, id, img, handleToggle, handleDeleted }) => {
  const dispatch = useDispatch();

  const { currentEditData } = useSelector(state => state.restaurantModal);
  const { dishes } = currentEditData;

  const truncatedTitle = isMobile ? `${title.substring(0, 20)}...` : title;
  
  const styles = {
    removeIcon: {
      width: '100%',
      color: 'red',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  };

  const onRemoveItemClick = () => {
    if ( dishes.length === 1) {
      dispatch( removeDish(id) );
      handleToggle();
    } else {
      dispatch( removeDish(id) );
      handleDeleted();
    }
  };

  return (
    <Grid container display={'flex'} alignItems={'center'} mb={1} >
      <Grid item xs={12} display={'flex'}>
        <Grid item xs={3}>
          <img className="feedImg" src={img || '/assets/ash.jpg' } alt="Avatar" />
        </Grid>
        
        <Grid item xs={7} display={'flex'} alignItems={'center'} >
          <Typography fontWeight={500} sx={{ opacity: 0.7 }}>{truncatedTitle}</Typography>
        </Grid>

        <Grid item xs={2} display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
          <div onClick={onRemoveItemClick}>
            <RemoveOutlined sx={styles.removeIcon} />
          </div>
          
        </Grid>
      </Grid>

    </Grid>
  );
};

OrderDishItem.propTypes = {
  title: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
