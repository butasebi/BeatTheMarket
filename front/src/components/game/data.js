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

  // console.log("allDatasetOptions.length: " + allDatasetOptions.length);
  // console.log("randomIndex: " + randomIndex);
  // console.log("allDatasetOptions[randomIndex]: " + allDatasetOptions[randomIndex]);

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
  // console.log("datasetOption: " + datasetOption);
  // console.log("startDate: " + startDate);
  // console.log("dataTimeInterval: " + dataTimeInterval);

  let datasetType;

  if (INDEX_FUNDS.includes(datasetOption)) {
    datasetType = 'stock';
  } else if (STOCKS.includes(datasetOption)) {
    datasetType = 'stock';
  } else if (CRYPTOCURRENCIES.includes(datasetOption)) {
    datasetType = 'crypto';
  } 

  /*
  console.log(datasetOption.value);
  console.log(datasetType);
  console.log(dataTimeInterval);
  console.log(startDate.toISOString());
  console.log(DATAPOINTS_COUNT_BY_INTERVAL[dataTimeInterval]);
  */

  const datasetSymbol = datasetOption.value.replace("&", "");
  console.log(datasetSymbol);

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET", 
    'https://localhost:5001/api/Statistics/get-statistics?' +
    'type=' + datasetType + '&' +
    'symbol=' + datasetSymbol + '&' +
    'time_unit=' + dataTimeInterval + '&' +
    'time_start=' + startDate.toISOString() + '&' +
    'time_end=2100-01-01&' +
    'to_symbol=USD', false); 
  xhr.send(); 
  var status = xhr.status;
  if (status !== 200){
    return generateStockData(dataTimeInterval, startDate);
  }

  var data= JSON.parse(xhr.responseText);
  
  for (let i = 0; i < data.length; i++) {
    data[i].date = Date.parse(data[i].date);
  }

  console.log(status);
  console.log(data);
  
  return data;
}
