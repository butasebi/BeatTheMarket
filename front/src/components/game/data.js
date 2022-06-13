import { CRYPTOCURRENCIES, INDEX_FUNDS, STOCKS } from '../../utils/constants';
import { generateStockData } from './dataGenerator';

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
  // TODO - foloseste-te de start date-ul dataset-ului
  return new Date();
}

export function getData(datasetOption, startDate, dataTimeInterval) {
  // TODO - foloseste API-ul
  return generateStockData(dataTimeInterval);
}