import { useSelector } from 'react-redux';
import moment from 'moment';

export const useCoinsFetch = () => {
  
  const { restaurantData } = useSelector(state => state.restaurant);
  const { orders } = restaurantData;

  const ordersByDay = {};

  // Recorremos las órdenes y contamos las órdenes por día
  orders.result.forEach((order) => {
    const createdAt = moment(order.createdAt).format('YYYY-MM-DD'); // Formateamos la fecha a 'YYYY-MM-DD'

    if (ordersByDay[createdAt]) {
      ordersByDay[createdAt]++;
    } else {
      ordersByDay[createdAt] = 1;
    }
  });

  const ordersByDayObj = [];
  // Ahora puedes obtener el recuento de órdenes por día y realizar las operaciones necesarias
  Object.entries(ordersByDay).forEach(([day, count]) => {
    const dayOfWeek = moment(day).format('dddd'); // Traducir la fecha al nombre del día de la semana
    ordersByDayObj.push({dayOfWeek, date: day, orders: count});
  });

  
  const data = {
    labels: ordersByDayObj.map( (order) => `${order.dayOfWeek} ${order.date}`),
    datasets: [
      {
        label: `${orders.result.length} Weekly orders`,
        data: ordersByDayObj.map( order => order.orders),
        backgroundColor: [
          'rgba(255, 99, 132, 1)', // Rojo
          'rgba(54, 162, 235, 1)', // Azul
          'rgba(255, 206, 86, 1)', // Amarillo
          'rgba(75, 192, 192, 1)', // Verde
          'rgba(153, 102, 255, 1)', // Púrpura
          'rgba(255, 159, 64, 1)', // Naranja
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 4,
      },
    ],
  };

  return { data };
};
