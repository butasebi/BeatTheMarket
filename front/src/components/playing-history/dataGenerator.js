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

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function toString(date) {
  let currentDate = new Date()
  let inSeconds = Math.floor((currentDate - date) / 1000)

  if (inSeconds < 60) {
    return String(inSeconds) + 's ago'
  }
    
  let inMinutes = Math.floor((currentDate - date) / (60 * 1000))

  if (inMinutes < 60) {
    return String(inMinutes) + 'm ago'
  }

  let inHours = Math.floor((currentDate - date) / (3600 * 1000))

  if (inHours < 24) {
    return String(inHours) + 'h ago'
  }

  let inDays = Math.floor((currentDate - date) / (24 * 3600 * 1000))

  if (inDays < 7) {
    return String(inDays) + 'd ago'
  } else if (inDays < 365) {
    return String(Math.floor(inDays / 7)) + 'w ago'
  }

  return currentDate.getFullYear() - date.getFullYear()
}

export default function getRandomData(size) {
  let records = []

  for (let i = 1; i <= size; ++i) {
    let record = {
      dataset: datasets[Math.floor(Math.random() * datasets.length)],
      score: String((Math.random() * 100 * (Math.round(Math.random()) ? 1 : -1)).toFixed(2)) + '%',
      time: randomDate(new Date(2022, 5, 1), new Date())
    }
    
    records.push(record)
  }

  records.sort((a, b) => {
    return new Date(b.time) - new Date(a.time)
  })

  for (let i = 0; i < records.length; ++i) {
    records[i].time = toString(records[i].time)
  }

  return records
}