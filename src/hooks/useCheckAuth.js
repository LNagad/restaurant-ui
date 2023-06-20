import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store';
import { verifySession } from '../helpers';

export const useCheckAuth = () => {
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const session = await verifySession();
      
      if (!session) {
        dispatch(logout());
      } else {
        console.log(session);
        const { uid, email, name, role, token, expiration } = session;
        dispatch(login({ uid, email, name, role, token, expiration }));
      }
    };

    checkAuth();
  }, []);

  return { status };
};
