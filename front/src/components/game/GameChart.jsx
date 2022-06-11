// noinspection RequiredAttributes

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
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
import { addAlphaToHex } from '../../utils/colors';
import customTheme from '../../styles/customTheme';

// Prepare ChartJS
ChartJS.register(
  CategoryScale,
  TimeScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

function priceToRelativePercentGain(price, startPrice) {
  return ((price - startPrice) / startPrice * 100).toFixed(0);
}

function prepareRawData(rawData) {
  const data = { datasets: [] };
  data.datasets.push({
    label: 'Stock price',
    data: rawData.map(item => ({
      x: item.date,
      y: priceToRelativePercentGain(item.price, rawData[0].price),
    })),
    fill: {
      target: 'origin',
      above: addAlphaToHex(customTheme.colors.brand['400'], 0.25),
      below: addAlphaToHex(customTheme.colors.brand['400'], 0.25),
    },
    borderColor: customTheme.colors.brand['400'],
    backgroundColor: customTheme.colors.brand['400'],
    borderWidth: 2,
    pointRadius: 0,
    tension: 0.5,
  });

  return data;
}

function getChartTimeUnit(dataTimeInterval) {
  // Minute-by-minute data => hour unit
  // Day-by-day data => month unit
  // Week-by-week data => year unit

  if (dataTimeInterval === 'minute') {
    return 'hour';
  } else if (dataTimeInterval === 'day') {
    return 'month';
  } else if (dataTimeInterval === 'week') {
    return 'year';
  }
}

function getOptions(startPrice, dataTimeInterval) {
  const timeUnit = getChartTimeUnit(dataTimeInterval);

  return {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: timeUnit,
        },
        title: {
          display: true,
          text: timeUnit[0].toUpperCase() + timeUnit.slice(1),
          font: {
            size: 14,
            weight: '500',
          },
        },
        ticks: {
          callback: (value, index) => {
            return ((index % 2 === 1) ? index + 1 : '');
          },
        },
      },
      y: {
        grid: {
          color: (context) => {
            return context.tick.value === 0 ? '#999' : 'rgba(0, 0, 0, 0.1)';
          },
        },
        ticks: {
          beginAtZero: true,
          callback: (value) => {
            return `${value}%`;
          },
        },
        title: {
          display: true,
          text: 'Percent Gain',
          font: {
            size: 14,
            weight: '500',
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
}

function GameChart(props) {
  // Props
  const rawData = props.rawData;
  const dataTimeInterval = props.dataTimeInterval;

  const data = prepareRawData(rawData);
  const options = getOptions(rawData[0].price, dataTimeInterval);

  return (
    <Box maxWidth='55em' margin='auto'>
      <Line data={data} options={options} />
    </Box>
  );
}

export default GameChart;