import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeView, startFetchingData } from '../../store';

import { DashboardLayout } from '../layout/DashboardLayout';

import { IsCheckingLoading } from '../../ui';
import { DashBoard, Food, Orders, Tables } from '../views';
import { Toaster} from 'react-hot-toast';

export const RestaurantDashboard = () => {
  const dispatch = useDispatch();
  const [dataLoaded, setDataLoaded] = useState(false); // Variable de estado para indicar si los datos se han cargado
  
  const { token, role } = useSelector(state => state.auth);
  const { activeView } = useSelector((state) => state.restaurant);
  const isAdmin = role === 'ADMIN';

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(startFetchingData({ token }));
      setDataLoaded(true); // Marcar que los datos se han cargado correctamente

      if (!isAdmin) dispatch( changeView('Food') );
      
    };
  
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <Toaster position="bottom-right" reverseOrder={false}/>
      {
        dataLoaded ? (
          (activeView === 'DashBoard' && isAdmin && <DashBoard />) ||
          (activeView === 'Food' && <Food />) ||
          (activeView === 'Tables' && <Tables />) ||
          (activeView === 'Orders' && <Orders />)
        ) : (
          <IsCheckingLoading /> // Renderizar un mensaje de carga mientras los datos se están obteniendo
        )
      }
    </DashboardLayout>
  );
};
