import React from 'react';
import { Line } from 'react-chartjs-2';

import { useTheme } from '@emotion/react';
import { faker } from '@faker-js/faker';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { makeStyles } from 'tss-react/mui';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const useStyles = makeStyles()((theme) => ({
  chart: {
    // height: '100% !important',
    // width: '100% !important',

    backgroundColor: theme.colors.dark[600],
  },
}));
function TChart(props) {
  const theme = useTheme();
  const { classes } = useStyles();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: true,
          color: theme.colors.gray[400],
          lineWidth: 0.5,
        },
      },
    },
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: theme.colors.primary[300],
        backgroundColor: theme.colors.primary[300],
      },
      {
        label: 'Dataset 2',
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: theme.colors.secondary[300],
        backgroundColor: theme.colors.secondary[300],
      },
    ],
  };
  return <Line className={classes.chart} options={options} data={data} />;
}

export default TChart;
