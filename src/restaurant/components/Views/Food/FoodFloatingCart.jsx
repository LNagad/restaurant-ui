import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { CartModal } from './CartModal';
import { useState } from 'react';

export const FoodFloatingCart = ({isMobile}) => {

  const { cartItemsCounter } = useSelector(state => state.restaurant);
  const display = cartItemsCounter > 0;

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div onClick={handleToggle} className='floatingCart' style={{display: `${display ? 'block': 'none'}`}}>
        <ShoppingCart sx={{fontSize: 35}} />
        <span>{cartItemsCounter}</span>
      </div>

      <CartModal isMobile={isMobile} open={open} handleToggle={handleToggle}/> 
    </>
  );
};
