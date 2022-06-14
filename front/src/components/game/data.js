import { CRYPTOCURRENCIES, INDEX_FUNDS, STOCKS } from '../../utils/constants';
import { generateStockData } from './dataGenerator';
import { max, min } from 'date-fns';

export function getRandomDatasetOption(pickedDatasetCategories) {
  let allDatasetOptions = [];
  for (const category of pickedDatasetCategories) {
    if (category.value === 'INDEX') {
      allDatasetOptions.push(...INDEX_FUNDS);
    } else if (category.value === 'CRYPTO') {
      allDatasetOptions.push(...CRYPTOCURRENCIES);
    } else if (category.value === 'STOCK') {
      allDatasetOptions.push(...STOCKS);
    }
  }
  const randomIndex = Math.floor(Math.random() * allDatasetOptions.length);
  return allDatasetOptions[randomIndex];
}

export function getDatasetCategory(datasetOption) {
  if (INDEX_FUNDS.includes(datasetOption)) {
    return 'index fund';
  } else if (CRYPTOCURRENCIES.includes(datasetOption)) {
    return 'cryptocurrency';
  } else if (STOCKS.includes(datasetOption)) {
    return 'stock';
  }
}

export function getRandomStartDate(datasetOption, dataTimeInterval) {
  const twoYearAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 2),
  );
  const twentyYearsAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 20),
  );

  let startDate;
  const endDate = new Date();

  if (dataTimeInterval === 'minute') {
    startDate = max([twoYearAgo, datasetOption.startDate]);
  } else {
    startDate = max([twentyYearsAgo, datasetOption.startDate]);
  }

  // Generate 5 dates, get the minimum of them (such that the start date isn't
  // too close to the present day)
  const generatedDates = [];
  for (let i = 0; i < 5; i++) {
    generatedDates.push(new Date(startDate.getTime() + Math.random() *
      (endDate.getTime() - startDate.getTime())));
  }

  return min(generatedDates);
}

export function getData(datasetOption, startDate, dataTimeInterval) {
  // TODO - foloseste API-ul
  return generateStockData(dataTimeInterval, startDate);
}