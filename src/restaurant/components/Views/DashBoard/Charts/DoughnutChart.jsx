import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js';
import { useState } from 'react';
import { useEffect } from 'react';
  
import { Doughnut } from 'react-chartjs-2';
  
ChartJS.register(ArcElement, Tooltip, Legend);
  
const options = {
  method: 'GET',
  headers: {
    'x-access-token': 'coinrankinge08201680a48d46138bd9f19825f1c39b37a8407efe02312',
  },
};
  
const baseURL = 'https://api.coinranking.com/v2/coins/?limit=10';
  
export const DoughnutChart = () => {
  
  const [Chart, setChart] = useState([]);
  
  const fetchCoins = async() => {  
    try {
      const resp =  await fetch(baseURL, options);
      const { data } = await resp.json();
      setChart(data);
  
    } catch (error) {
      console.log(error);
    }
  };
    
  useEffect(() => {
     
    fetchCoins();
  }, []);
    
    
  const data = {
    labels: Chart?.coins?.map( coin => coin.name ),
    datasets: [
      {
        label: `${Chart?.coins?.length} Coins Available`,
        data: Chart?.coins?.map( coin => coin.price ),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',    // Rojo
          'rgba(54, 162, 235, 0.2)',    // Azul
          'rgba(255, 206, 86, 0.2)',     // Amarillo
          'rgba(75, 192, 192, 0.2)',     // Verde
          'rgba(153, 102, 255, 0.2)',    // Púrpura
          'rgba(255, 159, 64, 0.2)',     // Naranja
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };
    
  
  const chartOptions  = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false, // Oculta el eje y
      },
    },
    legend: {
      display: true,
      labels: {
        fontSize: 46,
      },
    },
  
  };
  
  return (
    <Doughnut data={data} options={chartOptions} height={500} />
  );
};
  