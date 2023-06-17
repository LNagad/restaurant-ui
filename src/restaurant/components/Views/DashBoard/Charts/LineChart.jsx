import React from 'react';
import {
  Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale
} from 'chart.js';

import { useSelector } from 'react-redux';
    
import { Line } from 'react-chartjs-2';
import { useCoinsFetch } from '../../../../../hooks';
import { IsCheckingLoading } from '../../../../../ui';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);
    
export const LineChart = React.memo(() => {
  const { data } = useCoinsFetch();
  const { isLoading } = useSelector((state) => state.restaurant);
      
  const chartOptions  = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        display: true, // Oculta el eje y
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
    <>
      {isLoading ? (
        <IsCheckingLoading />
      ) : (
        <Line data={data} options={chartOptions} height={500} />
      )}
    </>
  );
});

LineChart.displayName = 'LineChart';