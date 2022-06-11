// noinspection RequiredAttributes

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
);

function prepareRawData(rawData) {
  const data = { datasets: [] };
  data.datasets.push({
    label: 'Stock price',
    data: rawData.map(item => ({ x: item.date, y: item.price })),
    borderColor: 'lime',
    backgroundColor: 'lime',
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

function getOptions(dataTimeInterval) {
  const timeUnit = getChartTimeUnit(dataTimeInterval);

  return {
    responsive: true,

    scales: {
      x: {
        type: 'time',
        time: {
          unit: timeUnit,
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
}

function EvolutionChart(props) {
  // Props
  const rawData = props.rawData;
  const dataTimeInterval = props.dataTimeInterval;

  const data = prepareRawData(rawData);
  const options = getOptions(dataTimeInterval);

  return (
    <Box maxWidth='55em' margin='auto'>
      <Line data={data} options={options} />
    </Box>
  );
}

export default EvolutionChart;