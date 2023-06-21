import moment from 'moment';
import PropTypes from 'prop-types';
import { Circle } from '@mui/icons-material';
import {Box, Grid, Typography } from '@mui/material';

export const OrderTimelineItem = ({order, isFinal}) => {
  
  const { createdAt ,status, dishes} = order;

  const formatedDate = moment(createdAt).format('D MMM YYYY h:mm A');
  const truncatedTitle = `${dishes[0].name.substring(0, 25)}...`;
  const colorStatus = status === 'En proceso' ? 'orderInProgress' : 'orderFinished';

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
                <Circle sx={{fontSize: 18, mt: 0.5}} color={colorStatus} />
                <div className='timeLineDivider'></div>
              </>
            ) :
            <Circle sx={{width: 32, fontSize: 18, mt: 0.5}} color={colorStatus} />
        }
      </Box>
     
      <Box marginLeft={2}>
        <Typography fontSize={19} fontWeight={500}>{truncatedTitle}</Typography>
        <Typography {...typographyProps}>{formatedDate}</Typography>
      </Box>
    </Grid>
  );
};

OrderTimelineItem.propTypes = {
  isFinal: PropTypes.bool.isRequired,
  order: PropTypes.object.isRequired
};