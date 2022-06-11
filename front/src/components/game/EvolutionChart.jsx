import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'day',
        displayFormats: {
          quarter: 'MMM YYYY',
        },
      },
    },
    y: {
      ticks: {
        callback: function(value) {
          return (value / 70 * 100).toFixed(0) + '%';
        },
      },
      scaleLabel: {
        display: true,
        labelString: 'Percentage',
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

export const data = {
  datasets: [
    {
      label: 'Money',
      data: [
        {
          x: '2021-11-06 23:39:30',
          y: 50,
        }, {
          x: '2021-11-07 01:00:28',
          y: 60,
        }, {
          x: '2021-11-08 09:00:28',
          y: 20,
        },
        {
          x: '2021-11-10 09:00:28',
          y: 40,
        },
        {
          x: '2021-11-11 09:00:28',
          y: 40,
        },
        {
          x: '2021-11-12 09:00:28',
          y: 40,
        },
        {
          x: '2021-11-13 09:00:28',
          y: 40,
        },
      ],
      borderColor: 'lime',
      backgroundColor: 'lime',
    },
  ],
};

function EvolutionChart() {
  return (
    <Box maxWidth='45em' margin='auto'>
      <Line data={data} options={options} />
    </Box>
  );
}

export default EvolutionChart;