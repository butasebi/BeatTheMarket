const VALID_TIME_INTERVALS = ['minute', 'day', 'week'];

function generateRandomDate() {
  const endDate = new Date(`${new Date().getFullYear() - 10}-01-01`);
  const startDate = new Date(`${new Date().getFullYear() - 40}-01-01`);
  return new Date(startDate.getTime() + Math.random() *
    (endDate.getTime() - startDate.getTime()));
}

function getNextDate(currentDate, timeInterval) {
  if (!VALID_TIME_INTERVALS.includes(timeInterval)) {
    throw new Error('The timeStep must be minute/day/week.');
  }

  const newDate = new Date(currentDate);
  if (timeInterval === 'minute') {
    newDate.setMinutes(newDate.getMinutes() + 1);
  } else if (timeInterval === 'day') {
    newDate.setDate(newDate.getDate() + 1);
  } else if (timeInterval === 'week') {
    newDate.setDate(newDate.getDate() + 7);
  }

  return newDate;
}

function getNumberOfDatapoints(timeInterval) {
  // minute-by-minute interval => time frame of 6 hours => 360 datapoints
  // day-by-day interval => time frame of 1 year => 365 datapoints
  // week-by-week interval => time frame of 10 years => 520 datapoints
  if (timeInterval === 'minute') {
    return 360;
  } else if (timeInterval === 'day') {
    return 365;
  } else if (timeInterval === 'week') {
    return 520;
  }
}

function generateStockData(timeInterval) {
  if (!VALID_TIME_INTERVALS.includes(timeInterval)) {
    throw new Error('The timeStep must be minute/day/week.');
  }

  const PRICE_VOLATILITY = 0.06;

  const startDate = generateRandomDate();
  const startPrice = Math.random() * 100 + 40;
  const stockData = [{ date: startDate, price: startPrice }];

  for (let i = 1; i < getNumberOfDatapoints(timeInterval); i++) {
    const prevData = stockData[i - 1];

    const changePercent = 2 * PRICE_VOLATILITY * (Math.random() - 0.48);
    const newPrice = prevData.price + prevData.price * changePercent;
    const newDate = getNextDate(prevData.date, timeInterval);

    stockData.push({ date: newDate, price: newPrice });
  }

  return stockData;
}

export { generateStockData };