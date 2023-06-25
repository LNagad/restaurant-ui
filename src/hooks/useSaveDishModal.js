import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useForm } from './useForm';
import { startSavingDish } from '../store';

const initialState = {
  name: '',
  price: '',
  servings: '',
  category: '',
};

const validationsForm = {
  name: [(value) => value.length >= 5, 'The dish name must be at least 5 characters long'],
  price: [(value) => value >= 5, 'Price must be at least 5'],
  servings: [(value) => value >= 1, 'Servings must be at least 1'],
  category: [(value) => value.length >= 1, 'The category is required'],
};

export const useSaveDishModal = (handleToggle) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef();

  const { token } = useSelector((state) => state.auth);
  const {
    restaurantData: { ingredients },
  } = useSelector((state) => state.restaurant);
  const ingredientsFormatted = ingredients.result.map((ing) => ({ value: ing.id, label: ing.name }));

  const { formState, formValidation, onChangeInput, isFormValid, onResetBtn } = useForm(
    initialState,
    validationsForm
  );

  const { name, price, servings, category } = formState;
  const { nameValid, priceValid, servingsValid, categoryValid } = formValidation;

  const [imageURL, setImageURL] = useState('');
  const [imagePreview, setImagePreview] = useState('/assets/inserImg.png');
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsErrorMessage, setIngredientsErrorMessage] = useState('Please select an ingredient');
  const [imageErrorMessage, setImageErrorMessage] = useState('Please select an image');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isFormValidModified =
    isFormValid &&
    ingredientsList.length > 0 &&
    imageURL !== '' &&
    imageURL !== '/assets/inserImg.png';

  const onFormSubmit = async () => {
    setFormSubmitted(true);
    if (ingredientsList.length < 1 || !isFormValidModified || imageURL.length < 1) return;

    setIsLoading(true);
    const dish = { name, price, servings, category, dishImg: imageURL, ingredients: ingredientsList };
    const resp = await dispatch(startSavingDish(dish, token));
    if (resp) {
      toast.success('Dish successfully added!');
    }
    setIsLoading(false);
    clearStates();
  };

  const clearStates = () => {
    handleToggle();
    onResetBtn();
    setImagePreview('/assets/inserImg.png');
    setImageURL('');
    setImageErrorMessage('Please select an image');
    setIngredientsErrorMessage('Please select an ingredient');
    setFormSubmitted(false);
  };

  const onFileInputChange = ({ target }) => {
    const file = target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImageURL(file);
    setImagePreview(imageURL);
    setImageErrorMessage(null);
  };

  const onIngredientsChange = (selectedOptions) => {
    const ingredients = selectedOptions.map((option) => option.value);
    setIngredientsErrorMessage(null);
    setIngredientsList(ingredients);
  };

  return {
    category,
    categoryValid,
    clearStates,
    fileInputRef,
    formState,
    formSubmitted,
    formValidation,
    imageErrorMessage,
    imagePreview,
    imageURL,
    ingredientsErrorMessage,
    ingredientsFormatted,
    ingredientsList,
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
  };
};
