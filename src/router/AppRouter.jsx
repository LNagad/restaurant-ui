import { Routes, Route, Navigate } from 'react-router-dom';
import { RestaurantRoutes } from '../restaurant';
import { AuthRoutes } from '../auth';
import { useSelector } from 'react-redux';
export const AppRouter = () => {

  
  const {status} = useSelector( state => state.auth);
  console.log(status);
  return (
    <Routes>
      {
        ( status === 'authenticated') 
          ? <Route path='/*' element={ <RestaurantRoutes /> }  />
          : <Route path='/auth/*' element={ <AuthRoutes /> } />
      }
      <Route path='/*' element={ <Navigate to={'/auth/login'} /> } />
    </Routes>
  );
};
