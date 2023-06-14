import { StarOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const FoodGridItem = ({img = '/public/assets/ash.jpg'}) => {
  return (
    <Grid item 
      paddingLeft={ {lg: 3}}
      marginBottom={3} marginRight={ {lg: 5}} width={ { sm: '45%', lg: '22%'}}>
      <div className='card'>
        <div className='p-3'>
          <img
            className='card-img w-100 foodImgResponsive' 
            src={img} alt="" 
          />
        </div>
        <div className="card-body d-flex flex-column align-items-center">  
          <Typography 
            textAlign={'center'}
            fontWeight={'600'}
          >Moti Bowl
          </Typography>
          <div className='d-flex align-items-center'>
            <StarOutlined color='reviewStar' />
            <Typography 
              fontWeight={'bold'}
              marginTop={0.5} 
              fontSize={17}>4.7
            </Typography>
          </div>
        </div>
        <div 
          className="card-footer d-flex justify-content-between"
          style={{ backgroundColor: 'white', border: 'none'}}
        >
          <div className='foodBorderEnd'>
            <Typography className='opacity-50'>Price</Typography>
            <Typography fontWeight={'bold'}>$23.59</Typography>
          </div>
          <div className='foodBorderEnd'>
            <Typography className='opacity-50'>Iteam</Typography>
            <Typography fontWeight={'bold'}>1,500</Typography>
          </div>
          <div>
            <Typography className='opacity-50'>Ordered</Typography>
            <Typography fontWeight={'bold'}>200</Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
};
