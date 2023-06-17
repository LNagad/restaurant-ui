import { Box, Grid, Toolbar, Typography } from '@mui/material';
import { ReceiptLongOutlined } from '@mui/icons-material';
import { RestaurantMenuOutlined } from '@mui/icons-material';
import { FmdGoodOutlined } from '@mui/icons-material';
import { FastfoodOutlined } from '@mui/icons-material';
import { DashBoardBoxItem, DashBoardCharts, DashBoardOrdersFeed } from '../components';

import './DashBoard.css';
import { LineChart } from '../components/Views/DashBoard/Charts/LineChart';
import { PieChart } from '../components/Views/DashBoard/Charts/PieChart';

export const DashBoard = () => {
  const styles = {
    orderIcon: {
      iconStyles: {
        fontSize: '80px',
        color: '#071A64',
      },
      backgroundColor: '#D1E9FC',
    },
    tablesIcon: {
      iconStyles: {
        fontSize: '80px',
        color: '#04287B',
      },
      backgroundColor: '#D1F3FF',
    },
    dishesIcon: {
      iconStyles: {
        fontSize: '80px',
        color: '#7B4F00',
      },
      backgroundColor: '#FFF7CD',
    },
    ingredientsIcon: {
      iconStyles: {
        fontSize: '80px',
        color: '#7A0C2E',
      },
      backgroundColor: '#FFE6D8',
    },
  };

  const titlesAndNumbers = [
    { title: 'Today Orders', number: 25, icon: <ReceiptLongOutlined /> },
    { title: 'Today Dishes', number: 25, icon: <RestaurantMenuOutlined /> },
    { title: 'Today Tables', number: 25, icon: <FmdGoodOutlined /> },
    { title: 'Today Ingredients', number: 25, icon: <FastfoodOutlined /> },
  ];

  return (
    <>
      <Toolbar />
      <Box padding={4} 
        paddingTop={0}>
        <Typography fontWeight={600} fontSize={30}>
          Hi, Welcome back!
        </Typography>
      </Box>

      <Grid container direction={'row'}>
        <Grid
          item
          xs={12}
          display={'flex'}
          alignItems={'center'}
          flexWrap={'wrap'}
          justifyContent={'space-evenly'}
        >
          {Object.keys(styles).map((key, index) => (
            <DashBoardBoxItem
              key={index}
              icon={titlesAndNumbers[index].icon}
              iconStyles={styles[key].iconStyles}
              number={titlesAndNumbers[index].number}
              title={titlesAndNumbers[index].title}
              bg={styles[key].backgroundColor}
            />
          ))}
        </Grid>

        <DashBoardCharts/>
        <DashBoardOrdersFeed />
      </Grid>
    </>
  );
};
