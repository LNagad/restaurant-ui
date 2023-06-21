import React from 'react';
import { useSelector } from 'react-redux';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { useCoinsFetch } from '../../../../../hooks';
import { IsCheckingLoading } from '../../../../../ui';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = React.memo(({ height }) => {
  const { data } = useCoinsFetch();
  const { isLoading } = useSelector((state) => state.restaurant);

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false, // Oculta el eje y
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom', // Coloca la leyenda debajo del gráfico
        labels: {
          fontSize: 30, // Ajusta el tamaño de fuente de las etiquetas de la leyenda
        },
      },
    },
  };

  return (
    <>
      {/* {isLoading ? (
        <IsCheckingLoading />
      ) : (
        <Pie data={data} options={chartOptions} height={500} />
        )} */}
      <Pie data={data} options={chartOptions} height={500} />
    </>
  );
});

PieChart.displayName = 'PieChart';
