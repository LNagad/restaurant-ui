import { PeopleOutlined } from '@mui/icons-material';
import { StarOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

import PropTypes from 'prop-types';

export const FoodGridItem = ({ dish, handleToggle, setModalData, isMobile }) => {
  
  const onFoodItemClick = () => {
    setModalData(dish);
    handleToggle();
  };

  const { name = '', price, number_of_servings, ingredients, img  } = dish;
  
  const newName = name.length > 20 ? name.slice(0, 19)+ '...' : name;
  
  return (
    <Grid component={'div'} onClick={onFoodItemClick} 
      item xs={12} lg={3.2} md={5}  marginLeft={!isMobile && 1 } boxSizing={'border-box'} marginBottom={4}
      className='gridHover'>
      <div className='card'>
        <div className='p-3'>
          <img className='card-img w-100 foodImgResponsive' src={!img ? '/public/assets/ella-olsson.jpg' : img } alt='' />
        </div>
        <div className='card-body d-flex flex-column align-items-center'>
          <Typography textAlign={'center'} fontWeight={'600'} fontSize="1rem">
            {newName}
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
  img: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  setModalData: PropTypes.func.isRequired, 
  isMobile: PropTypes.bool.isRequired
};