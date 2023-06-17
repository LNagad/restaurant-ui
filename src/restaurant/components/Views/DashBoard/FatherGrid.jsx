import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

export const FatherGrid = ({children}) => {
  return (
    <Grid
      item
      xs={12}
      display={'flex'}
      marginBottom={1}
      padding={{ xs: 1, lg: 4}} 
      alignItems={'center'}
      flexWrap={'wrap'}
      justifyContent={ {lg: 'space-between', xs: 'center'}}
      boxSizing={'border-box'}
    >
      {children}
    </Grid>
  );
};

FatherGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};