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