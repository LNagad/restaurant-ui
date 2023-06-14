import { ListItemButton } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeView } from '../../../store';

export const SideBarListItem = ({ item, height = '10%', viewName }) => {
  
  const dispatch = useDispatch();

  const onChangeView = () => {
    dispatch( changeView(viewName) );
  };
  
  return (
    <ListItemButton 
      onClick={ onChangeView }
      sx={{ height: height, display: 'flex', justifyContent: 'center'}}>
      { item }
    </ListItemButton>
  );
};

SideBarListItem.propTypes = {
  item: PropTypes.any.isRequired,
  viewName: PropTypes.string.isRequired,
};
