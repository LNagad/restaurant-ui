import { Box, Button, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FatherGrid } from './FatherGrid';

import { OrderFeedItem } from './OrderFeedItem';
import { OrderTimelineItem } from './OrderTimelineItem';
import { useSelector } from 'react-redux';

import { getTimeAgo } from '../../../../helpers';

export const DashBoardOrdersFeed = () => {
  
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const { restaurantData } = useSelector( state => state.restaurant );
  const { orders } = restaurantData;
  
  const gridItemProps = {
    item: true ,
    xs:12 ,
    lg:8 ,
    mb: 2,
    padding:{ xs: 1, lg: 4} ,
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    className:'boxShadow',
  };
  const secondGridProps = {
    item: true,
    xs: 12,
    lg: 3.5,
    padding: { xs: 1, lg: 4} ,
    className: 'boxShadow',
  };

  const TypographyProps = {
    fontWeight: 600,
    fontSize: 26,
    mb: {lg: 2, xs: 0}
  };
  return (
    <FatherGrid>
      <Grid {...gridItemProps}>
        <Box>
          <Typography {...TypographyProps}>Recent orders</Typography>
        </Box>
        {
          orders.result.map( order => (
            <OrderFeedItem 
              key={order?.id}
              title={order?.dishes[0]?.name} 
              subTitle={order?.dishes[0]?.category}
              date={getTimeAgo(order?.createdAt)} />
          ))
        }

      </Grid>

      <Grid {...secondGridProps}>
        <Typography {...TypographyProps}>Orders Timeline</Typography> 
        {
          orders.result.map( (order, index) => {
            let isFinal = index === (orders.result.length - 1);
            return (<OrderTimelineItem key={index} order={order} isFinal={isFinal} />);
          } ) 
        }
      </Grid>

    </FatherGrid>
  );
};
