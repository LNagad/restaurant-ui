import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { endLoading, startLoading } from '../store';

const options = {
  method: 'GET',
  headers: {
    'x-access-token': 'coinrankinge08201680a48d46138bd9f19825f1c39b37a8407efe02312',
  },
};
      
const baseURL = 'https://api.coinranking.com/v2/coins/?limit=10';

export const useCoinsFetch = () => {
  const [Chart, setChart] = useState([]);
  
  const dispatch = useDispatch();

  const fetchCoins = useCallback(async() => {  
    try {
      
      const resp =  await fetch(baseURL, options);
      const { data } = await resp.json();
      setChart(data);
      dispatch( endLoading() );
      
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  
  useEffect(() => {   
    
    fetchCoins();
    console.log('re rendered');
  }, []);

  const data = {
    labels: Chart?.coins?.map((coin) => coin.name),
    datasets: [
      {
        label: `${Chart?.coins?.length} Coins Available`,
        data: Chart?.coins?.map((coin) => Math.round(coin.price, 2)),
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
