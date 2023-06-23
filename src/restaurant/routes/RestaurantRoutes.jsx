import { Routes, Route, Navigate } from 'react-router-dom';
import { RestaurantDashboard } from '../pages/RestaurantDashboard';

export const RestaurantRoutes = () => {
  return (
    <Routes>
        
      <Route path='/' element={ <RestaurantDashboard />  }  />
        
      <Route path='/*' element={ <Navigate to={'/'} /> } />
    </Routes>
  );
};
