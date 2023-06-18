import { Circle } from '@mui/icons-material';
import {Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const OrderTimelineItem = ({title, isFinal}) => {
  
  const truncatedTitle = `${title.substring(0, 25)}...`;
  
  const boxProps = {
    display: 'flex',
    component: 'div',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const typographyProps = {
    fontSize: '17px',
    color: '#6C6C6C',
    fontWeight: 400,
  };

  return (
    <Grid display={'flex'} mb={3}>

      <Box {...boxProps}>
        {
          !isFinal ? 
            (
              <>
                <Circle sx={{fontSize: 18, mt: 0.5}} color='orderFinished' />
                <div className='timeLineDivider'></div>
              </>
            ) :
            <Circle sx={{width: 32, fontSize: 18, mt: 0.5}} color='orderStarted' />
        }
      </Box>
     
      <Box marginLeft={2}>
        <Typography fontSize={19} fontWeight={500}>{truncatedTitle}</Typography>
        <Typography {...typographyProps}>30 May 2023 12:49 PM</Typography>
      </Box>
    </Grid>
  );
};

OrderTimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  isFinal: PropTypes.bool.isRequired
};