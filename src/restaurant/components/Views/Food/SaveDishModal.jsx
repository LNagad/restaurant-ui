import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Box, Modal, Fade, Button, Typography, Backdrop, Grid, TextField, MenuItem, CircularProgress } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import Select from 'react-select';

import { useForm, useSaveDishModal } from '../../../../hooks';
import { colourOptions, customStyles, style, modalProps } from './modalStyles';
import { DISH_CATEGORY } from '../../../enums';




export const SaveDishModal = ({ open, handleToggle, isMobile }) => {
  
  const  {
    category,
    categoryValid,
    clearStates,
    fileInputRef,
    formSubmitted,
    imageErrorMessage,
    imagePreview,
    ingredientsErrorMessage,
    ingredientsFormatted,
    isFormValidModified,
    isLoading,
    name,
    nameValid,
    onChangeInput,
    onFileInputChange,
    onFormSubmit,
    onIngredientsChange,
    price,
    priceValid,
    servings,
    servingsValid,
  } = useSaveDishModal(handleToggle);



  return (
    <div>
      <Modal {...modalProps} open={open}  onClose={handleToggle} 
        slots={{ backdrop: Backdrop }} slotProps={{backdrop: {onClick: null}}} >
        <Fade in={open}>
          <Box sx={{ ...style, width: `${isMobile ? '95vw' : '60vw'}` }}>
            <Grid container height={'100%'} sx={{ width: { sm: '100%', lg: '30%' }, backgroundColor: 'white', padding: 3 }}>
              <img className="imgAddCardDish" src={imagePreview} onClick={() => fileInputRef.current.click()} />
              <input style={{ display: 'none' }} type="file" ref={fileInputRef} onChange={onFileInputChange} name="dishImg" />
              {formSubmitted && imageErrorMessage && (
                <div style={{ color: 'red', marginLeft: '14px', fontSize: '0.75rem', marginTop: '4px' }}>
                  {imageErrorMessage}
                </div>
              )}
            </Grid>

            <Grid container display={'flex'} justifyContent={'space-between'} alignContent={'start'} sx={{ width: { sm: '100%', lg: '70%' }, backgroundColor: 'white', padding: 3 }}>
              <Grid item mb={4} xs={12} lg={5}>
                <TextField
                  type="text"
                  variant="outlined"
                  label="Name"
                  placeholder="Dish name"
                  fullWidth
                  size="small"
                  name="name"
                  value={name}
                  onChange={onChangeInput}
                  error={formSubmitted && !!nameValid}
                  helperText={formSubmitted && nameValid}
                />
              </Grid>
              <Grid item xs={12} lg={5}>
                <TextField
                  fullWidth
                  type="number"
                  variant="outlined"
                  label="Price"
                  placeholder="Dish price"
                  size="small"
                  name="price"
                  value={price}
                  onChange={onChangeInput}
                  error={formSubmitted && !!priceValid}
                  helperText={formSubmitted && priceValid}
                  inputProps={{ step: 'any', min: 0 }}
                />
                
              </Grid>
              <Grid item xs={12} lg={5}>
                <TextField
                  fullWidth
                  select
                  variant="outlined"
                  label="Servings"
                  size="small"
                  placeholder="Servings quantity"
                  name="servings"
                  value={servings}
                  onChange={onChangeInput}
                  error={formSubmitted && !!servingsValid}
                  helperText={formSubmitted && servingsValid}
                > {Array.from({ length: 7 }, (_, index) => (
                    <MenuItem key={index + 1} value={index + 1}>
                      {index + 1}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} lg={5}>
                <TextField
                  fullWidth
                  select
                  variant="outlined"
                  label="Dish Category"
                  size="small"
                  placeholder="Servings quantity"
                  name="category"
                  value={category}
                  error={formSubmitted && !!categoryValid}
                  helperText={formSubmitted && categoryValid}
                  onChange={onChangeInput}
                >
                  {
                    Object.keys(DISH_CATEGORY).map(category => {
                      return (<MenuItem key={category} value={DISH_CATEGORY[category]}>{DISH_CATEGORY[category]}</MenuItem>);
                    })
                  }
                </TextField>
              </Grid>

              <Grid mt={4} item xs={12}>
                <Select
                  isMulti
                  name="ingredients"
                  className={formSubmitted ? ingredientsErrorMessage ? 'error-select' : '' : ''}
                  styles={customStyles}
                  options={ingredientsFormatted}
                  placeholder={<div className={formSubmitted ?  ingredientsErrorMessage && 'select-placeholder' : ''}>Select dish ingredients</div>}
                  onChange={onIngredientsChange}
                  error={true}
                />
                {formSubmitted && ingredientsErrorMessage && (
                  <div style={{ color: 'red', marginLeft: '14px', fontSize: '0.75rem', marginTop: '4px' }}>
                    {ingredientsErrorMessage}
                  </div>
                )}
              </Grid>
            </Grid>

            <Grid item xs={12} bgcolor={'#fff'} p={4} display="flex" justifyContent={'space-between'}>
              <Button disabled={isLoading} variant="outlined" color="error" onClick={clearStates}>
                Cancel
              </Button>

              <Button disabled={formSubmitted && !isFormValidModified || isLoading} variant="outlined" color="orderFinished" onClick={onFormSubmit}>
                {(isLoading) ? <CircularProgress color="orderFinished" size={26} sx={{ml: 1}}/>
                  :  
                  <SaveOutlined />
                }
                
                <Typography ml={1}>Save Dish</Typography>
              </Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

SaveDishModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};


