import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = () => {
  return (dispatch) => {
    dispatch( checkingCredentials() );
  };
};

export const StartSignInWithEmailAndPassword = (user) => {
  return async(dispatch) => {
    dispatch( checkingCredentials() );
    console.log(user);
    const resp = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: user.email, password: user.password })
    });

    const result = await resp.json();

    if (!result.ok) {
      const {statusCode} = result;

      if (statusCode === 400 || statusCode === 404) {
        const { data, message } = result;
        const errorMessages = data?.map(item => item.msg) || [message];
  
        dispatch(logout({ errorMessages }));
        return;
      }
    } 

    const { userId, email, name, role, token } = result;

    const sesion = {
      uid: userId,
      email: email,
      name: name,
      role: role,
      token: token,
      expiration: new Date().getTime() + 3600000 // 1 hora = 3600000 milisegundos
    };

    const sesionString = JSON.stringify(sesion);

    sessionStorage.setItem('session', sesionString);
    dispatch(login ({ uid: userId, email, name, role }));
  };
};

export const StartSignupWithEmailAndPassword = (userRequest) => {
  return async(dispatch) => {
    dispatch( checkingCredentials() );

    const { email, password, name, phone } = userRequest;
    
    const resp = await fetch('http://localhost:3000/auth/signup?isAdmin=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name, phoneNumber: phone })
    });

    const result = await resp.json();
    
    if (!result.ok) {
      console.log(result);

      if (result.statusCode === 400) {
        const { data, message } = result;
        const errorMessages = data?.map(item => item.msg) || [message];
  
  
        dispatch(logout({ errorMessages }));
      }
    } 
    const { user} = result;

    dispatch( StartSignInWithEmailAndPassword({email: user.email, password}));
  };
};

export const StartLogout = () => {
  return async(dispatch) => {
    localStorage.removeItem('session');
    dispatch(logout());
  };
};