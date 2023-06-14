import { ListItemButton } from '@mui/material';

export const SideBarListItem = ({ item, height = '10%' }) => {
  return (
    <ListItemButton 
      sx={{ height: height, display: 'flex', justifyContent: 'center'}}>
      { item }
    </ListItemButton>
  );
};
