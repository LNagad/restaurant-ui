import { Grid, Typography, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';
import { gridItemProps, gridContainerProps, timeTypographyProps } from './utils/feedGridProps';

export const OrderFeedItem = ({ title, subTitle }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const truncatedTitle = isMobile ? `${title.substring(0, 20)}...` : title;
  const truncatedSubTitle = isMobile ? `${subTitle.substring(0, 20)}...` : subTitle;

  return (
    <Grid container display={'flex'} alignItems={'center'} marginY={2}>
      <Grid {...gridItemProps}>
        <img className="feedImg" src="/assets/ash.jpg" alt="Avatar" />
      </Grid>

      <Grid {...gridContainerProps}>
        <Typography fontWeight={500}>{truncatedTitle}</Typography>
        <Typography sx={{ opacity: 0.7 }}>{truncatedSubTitle}</Typography>
      </Grid>

      <Grid item lg={2} xs={12} className="orderFeedTime">
        <Typography {...timeTypographyProps}>about 1 minute ago</Typography>
      </Grid>
    </Grid>
  );
};

OrderFeedItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
