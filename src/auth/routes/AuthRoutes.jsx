import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';

export const AuthRoutes = () => {
  return (
    <Routes>
        
      <Route path='/login' element={ <LoginPage />  }  />
      <Route path='/signup' element={ <SignUpPage />  }  />
        
    </Routes>
  );
};


