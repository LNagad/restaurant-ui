import { Routes, Route, Navigate } from 'react-router-dom';
import { RestaurantRoutes } from '../restaurant';
import { AuthRoutes } from '../auth';
import { useCheckAuth } from '../hooks';
export const AppRouter = () => {

  
  const {status} = useCheckAuth();

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
