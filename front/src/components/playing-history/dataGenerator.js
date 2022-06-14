const datasets = [
  'S&P 500',
  'Nasdaq-100',
  'Bitcoin',
  'Ethereum',
  'Litecoin',
  'Stellar',
  'Adobe',
  'Apple',
  'Amazon',
  'AMD',
  'Cisco',
  'Dell',
  'Electronic Arts',
  'Google',
  'IBM',
  'Intel',
  'Meta',
  'Microsoft',
  'Netflix',
  'Oracle',
  'Paypal',
  'Spotify',
  'Tesla',
  'Twitter',
  'Uber',
  'Zoom'
]

export default function getRandomData(size) {
  let records = []

  for (let i = 1; i <= size; ++i) {
    let record = {
      dataset: datasets[Math.floor(Math.random() * datasets.length)],
      score: String((Math.random() * 100 * (Math.round(Math.random()) ? 1 : -1)).toFixed(2)) + '%',
      time: '1d ago'
    }

    records.push(record)
  }

  return records
}