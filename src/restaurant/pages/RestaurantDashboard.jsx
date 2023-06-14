import { useSelector } from 'react-redux';
import { DashboardLayout } from '../layout/DashboardLayout';
import { DashBoard, Food, Orders, Tables } from '../views';

export const RestaurantDashboard = () => {

  const { activeView } = useSelector( state => state.restaurant );

  return (
    <DashboardLayout>
      { 
        activeView === 'DashBoard' && <DashBoard /> ||
        activeView === 'Food' && <Food /> ||
        activeView === 'Tables' && <Tables /> ||
        activeView === 'Orders' && <Orders /> 
      }
    </DashboardLayout>
  );
};
