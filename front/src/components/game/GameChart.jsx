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
import { intervalToDuration } from 'date-fns';

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
  return ((price - startPrice) / startPrice * 100).toFixed(2);
}

function prepareRawData(rawData) {
  const data = { datasets: [] };
  data.datasets.push({
    label: 'Buy and Hold',
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
    pointHitRadius: 10,
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

function getOptions(startPrice, startDate, dataTimeInterval, lastDate) {
  const timeUnit = getChartTimeUnit(dataTimeInterval);

  return {
    responsive: true,
    animations: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: timeUnit,
        },
        suggestedMax: lastDate,
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
        suggestedMin: -10,
        suggestedMax: 10,
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
        onClick: () => {
        },
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            const dateLabel = context[0].label;
            const date = new Date(dateLabel.slice(0, -5));

            const dateDiff = intervalToDuration({
              start: startDate,
              end: date,
            });

            if (timeUnit === 'hour') {
              return `Hour ${dateDiff.hours}, Minute ${dateDiff.minutes}`;
            } else if (timeUnit === 'month') {
              return `Month ${dateDiff.months}, Day ${dateDiff.days}`;
            } else if (timeUnit === 'year') {
              return `Year ${dateDiff.years}, Week ${((dateDiff.months *
                30 + dateDiff.days) / 7).toFixed()}`;
            }
          },
          label: (context) => {
            const value = context.parsed.y;
            const percentChange = `${(value > 0) ? '+' : ''}${value.toFixed(
              2)}%`;
            const datasetLabel = context.dataset.label;

            return ` ${datasetLabel}: ${percentChange}`;
          },
        },
      },
    },
  };
}

function GameChart(props) {
  const { rawData, dataTimeInterval, lastDate } = props;

  const data = prepareRawData(rawData);
  const options = getOptions(rawData[0].price, rawData[0].date,
    dataTimeInterval, lastDate);

  return (
    <Box maxWidth='55em' margin='auto'>
      <Line data={data} options={options} />
    </Box>
  );
}

export default GameChart;