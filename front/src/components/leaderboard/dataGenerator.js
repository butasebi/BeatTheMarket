import { STOCKS, INDEX_FUNDS, CRYPTOCURRENCIES } from '../../utils/constants';

const users = [
  'David Bejenariu',
  'Luca Trușcă',
  'Ionuț Anghelina',
  'Sebastian Buta',
  'Alex Enache',
  'Ionescu Capybara',
  'Stănescu Lată',
  'Ben Dover',
  'Mike Hunt',
  'Mike Oxlong',
  'Hugh Jass',
  'Jenny Tulls',
]

const datasets = STOCKS.concat(INDEX_FUNDS).concat(CRYPTOCURRENCIES).map(d => d.value)

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
      user: users[Math.floor(Math.random() * users.length)],
      score: (Math.random() * 100 * (Math.round(Math.random()) ? 1 : -1)).toFixed(2),
      time: toString(randomDate(new Date(2022, 5, 1), new Date()))
    }
    
    records.push(record)
  }

  records.sort((a, b) => {
    return b.score - a.score
  })

  for (let i = 0; i < records.length; ++i) {
    records[i].score = String(records[i].score) + '%'
  }

  return records
}
