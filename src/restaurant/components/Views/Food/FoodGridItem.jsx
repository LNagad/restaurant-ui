import { PeopleOutlined } from '@mui/icons-material';
import { StarOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

import PropTypes from 'prop-types';

export const FoodGridItem = ({ dish, img = '/public/assets/ash.jpg' }) => {
  
  const { name, price, number_of_servings, ingredients  } = dish;

  return (
    <Grid item xs={12} md={2.8} boxSizing={'border-box'} marginBottom={3}>
      <div className='card'>
        <div className='p-3'>
          <img className='card-img w-100 foodImgResponsive' src={img} alt='' />
        </div>
        <div className='card-body d-flex flex-column align-items-center'>
          <Typography textAlign={'center'} fontWeight={'600'} fontSize="1.2rem">
            {name}
          </Typography>
          <div className='d-flex align-items-center'>
            <StarOutlined color='reviewStar' />
            <Typography fontWeight={'bold'} marginTop={0.5} fontSize="0.9rem">
              4.7
            </Typography>
          </div>
        </div>
        <div
          className='card-footer d-flex justify-content-between'
          style={{ backgroundColor: 'white', border: 'none' }}
        >
          <div className='foodBorderEnd'>
            <Typography className='opacity-50' fontSize="0.8rem">
              Price
            </Typography>
            <Typography fontWeight={'bold'} fontSize="0.9rem">
              ${price}
            </Typography>
          </div>
          <div className='foodBorderEnd'>
            <Typography className='opacity-50' fontSize="0.8rem">
              Sevings
            </Typography>
            <Typography fontWeight={'bold'} fontSize="0.9rem">
              <PeopleOutlined></PeopleOutlined> {number_of_servings}
            </Typography>
          </div>
          <div>
            <Typography className='opacity-50' fontSize="0.8rem">
              ingredients
            </Typography>
            <Typography fontWeight={'bold'} fontSize="0.9rem" textAlign={'end'}>
              {ingredients.length}
            </Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
};


FoodGridItem.propTypes = {
  dish: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired
};