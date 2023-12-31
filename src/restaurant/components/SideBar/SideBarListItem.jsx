import { ListItemButton } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeView, togleSideBar } from '../../../store';

export const SideBarListItem = ({ item, height = '10%', viewName }) => {
  
  const dispatch = useDispatch();
  
  const onChangeView = () => {
    dispatch( changeView(viewName) );
    dispatch( togleSideBar(viewName) );
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
