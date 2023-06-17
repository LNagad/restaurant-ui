
import { Box, Typography } from '@mui/material';
import React from 'react';

export const DashBoardBoxItem = ({icon, iconStyles, title, number, bg }) => {
  return (
    <Box
      width={{ lg: '22%', md: '33%', xs: '100%'}}
      height={{ xs: '255px'}}
      padding={{lg: 0, xs: 5}}
      marginBottom={{lg: 0, xs: 5}}
      // marginRight={{lg: 5}}
      sx={{ backgroundColor: bg }} 
      borderRadius={ 3 } 
    >
      <Box 
        component={'div'}
        className='centerDivCards'>
        <Box >
          <span>
            {React.cloneElement(icon, { sx: { ...iconStyles } })}
          </span>
        </Box>
      </Box>
      <Box 
        component={'div'} 
        className='centerDivCardSecondary'
      >
        <Typography color={iconStyles.color} fontWeight={'bold'} fontSize={46}>{number}</Typography>
        <Typography color={iconStyles.color}
          sx={{fontWeight: 'bold', opacity: 0.6}}>{title}</Typography>
      </Box>
    </Box>
  );
};
