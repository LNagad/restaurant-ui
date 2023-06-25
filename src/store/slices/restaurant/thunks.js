import { loadRestaurantData } from './restaurantSlice';

const  http = 'http://localhost:3000';

export const startFetchingData = ({token}) => {
    
  return async(dispatch) => {
        
    const AuthHeader = { 
      headers: {'Authorization' : `bearer ${token}`},
      method: 'GET'
    };

    const dishesFetch = await fetch(http+'/dishes', AuthHeader);
    const ingredientsFetch = await fetch(http+'/ingredients', AuthHeader);
    const tablesFetch = await fetch(http+'/tables', AuthHeader);
    const ordersFetch = await fetch(http+'/orders/week', AuthHeader);

    const fetchPromises = [];

    fetchPromises.push(dishesFetch);
    fetchPromises.push(ingredientsFetch);
    fetchPromises.push(tablesFetch);
    fetchPromises.push(ordersFetch);

    const [ dishes, ingredients, tables, orders ] = await Promise.all(fetchPromises)
      .then((responses) => Promise.all(responses.map((response) => response.json())));
    
    [ dishes, ingredients, tables, orders ].forEach( e => delete e.ok);

    dispatch( loadRestaurantData( { dishes, ingredients, tables, orders}  ));
  };
};

export const startSendOrder = (tableId, cartItems, token) => {
  return async(dispatch) => {
    
    const dishesList = [];
    
    cartItems.forEach( dish => {
      dishesList.push(dish.id);
    });
   
    const options = { 
      headers: {
        'Authorization' : `bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ dishes: dishesList, tableId: tableId}),
      
    };

    const dishesFetch = await fetch(http+'/orders', options);

    const dishesResp = await dishesFetch.json();

    if (dishesResp.ok) {
      dispatch( startFetchingData({token}) );
      return true;
    }
  };
};

export const startSavingDish = (dish, token) => {
  return async(dispatch) => {
   
    console.log(dish);
    console.log(token);

    const formData = new FormData();
    // console.log(dish);
    formData.append('name', dish.name);
    formData.append('img', dish.dishImg);
    formData.append('category', dish.category);
    formData.append('servings', dish.servings);
    formData.append('ingredients', JSON.stringify(dish.ingredients));
    formData.append('price', dish.price);
    

    const options = { 
      headers: {
        'Authorization' : `bearer ${token}`,
      },
      method: 'POST',
      body: formData,
      
    };
    
    const dishesFetch = await fetch(http+'/dishes', options);
    
    const dishesResp = await dishesFetch.json();
    
    if (dishesResp.ok) {
      dispatch( startFetchingData({token}) );
      return true;
    }
  
  };
};