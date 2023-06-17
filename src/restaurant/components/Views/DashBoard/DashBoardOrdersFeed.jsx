import { Box, Button, Divider, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FatherGrid } from './FatherGrid';

import { OrderFeedItem } from './OrderFeedItem';
import { OrderTimelineItem } from './OrderTimelineItem';

export const DashBoardOrdersFeed = () => {
  const title = 'Order #123: Crispy French Fries and Cheeseburger';
  const subTitle = 'Combo Meal with a refreshing cola included';

  const gridItemProps = {
    item: true ,
    xs:12 ,
    lg:8 ,
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

        <OrderFeedItem title={title} subTitle={subTitle} />

        <div className='lineDivider'></div>

        <OrderFeedItem title={title} subTitle={subTitle} />

      </Grid>

      <Grid {...secondGridProps}>
        <Typography {...TypographyProps}>Orders Timeline</Typography> 
        <OrderTimelineItem />
      </Grid>
    </FatherGrid>
  );
};
