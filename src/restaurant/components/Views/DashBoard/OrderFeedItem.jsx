import { Grid, Typography, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { gridItemProps, gridContainerProps, timeTypographyProps } from './utils/feedGridProps';

export const OrderFeedItem = ({ title, subTitle, date }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const truncatedTitle = isMobile ? `${title.substring(0, 20)}...` : title;
  const truncatedSubTitle = isMobile ? `${subTitle.substring(0, 20)}...` : subTitle;

  return (
    <Grid container display={'flex'} alignItems={'center'} mb={1}>
      <Grid item xs={12} lg={10} display={'flex'}>
        <Grid {...gridItemProps}>
          <img className="feedImg" src="/assets/ash.jpg" alt="Avatar" />
        </Grid>
        
        <Grid {...gridContainerProps}>
          <Typography fontWeight={500}>{truncatedTitle}</Typography>
          <Typography sx={{ opacity: 0.7 }}>{truncatedSubTitle}</Typography>
        </Grid>
      </Grid>

      <Grid item lg={2} xs={12} className="orderFeedTime">
        <Typography {...timeTypographyProps}>{date}</Typography>
      </Grid>

      <div className='lineDivider'></div>
    </Grid>
  );
};

OrderFeedItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
