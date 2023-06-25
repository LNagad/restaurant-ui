
import { Circle } from '@mui/icons-material';
import { CloseOutlined } from '@mui/icons-material';
import {Box,Modal, Fade, Button, Typography, Backdrop, Grid, TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText} from '@mui/material';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column'
};

const TypographyProps = {
  id: 'transition-modal-description',
  sx: {mt: 2 }
};

export const SaveModal = ({open, handleToggle, data}) => {
  const { id, createdFormat, dishes, status, subtotal } = data;

  const colorStatus = status === 'En proceso' ? 'orderInProgress' : 'orderFinished';

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleToggle}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
       
          <Box sx={style}>           
            <Grid container p={4} >
              <Typography fontSize={30} fontWeight={600} id="transition-modal-title" variant="h6" component="h2">
              Order Details
              </Typography>
             
              <Grid item xs={12} display={'flex'} justifyContent={'space-between'}>
                <Typography {...TypographyProps}>Order # { id }</Typography>
                <Typography  {...TypographyProps}>{createdFormat}</Typography>
              </Grid>

              <Grid item xs={12} mb={2} display={'flex'} justifyContent={'start'}>               
                <Typography {...TypographyProps}> 
                  <Circle sx={{fontSize: 18, marginRight: 1, mb: 0.2}} color={colorStatus} />
                  { status }
                </Typography>
              </Grid>

              <Grid item xs={12} mb={2} >
                <List disablePadding sx={{}}>
                  {
                    dishes?.map( dish => (
                      <ListItem key={dish.id} sx={{padding: 0, mt: 1, mb: 1}}>
                        <ListItemAvatar>
                          <Avatar><img className='feedImg' src='/assets/ash.jpg'/></Avatar>
                        </ListItemAvatar>
                        <Box sx={{
                          width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          bgcolor: '#F6F6F7', p: 1.2, borderRadius: 3
                        }}>
                          <ListItemText >
                            <Typography>{dish.name}</Typography>
                          </ListItemText>
                          <Typography color={'secondary'} 
                            sx={{bgcolor: '#000', borderRadius: 5, p: 1}}
                          >${dish.price}
                          </Typography>
                        </Box>
                      </ListItem>
                    ))
                  }
                </List>
              </Grid>

                
              <Grid item xs={12} display={'flex'} flexDirection={'column'} alignItems={'end'}>
                
                <Typography fontSize={22} fontWeight={500}>SubTotal</Typography>
                <Typography fontWeight={500}>${subtotal}</Typography>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

SaveModal.propTypes ={
  open: PropTypes.bool,
  handleToggle: PropTypes.func
};