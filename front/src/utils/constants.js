import {
  AiOutlineBarChart,
  FaAmazon,
  FaEthereum,
  FaGoogle,
  FaMicrosoft,
  FaPaypal,
  FaSpotify,
  FaTwitter,
  FaUber,
  RiNetflixFill,
  SiAdobe,
  SiAmd,
  SiApple,
  SiBitcoin,
  SiCisco,
  SiDell,
  SiEa,
  SiIbm,
  SiIntel,
  SiLitecoin,
  SiOracle,
  SiStellar,
  SiTesla,
  SiZoom,
} from 'react-icons/all';
import IconLabel from '../components/IconLabel';
import { IconBrandMeta } from '@tabler/icons';

export const DATASET_CATEGORIES = [
  { value: 'INDEX', label: 'Index funds' },
  { value: 'CRYPTO', label: 'Cryptocurrencies' },
  { value: 'STOCK', label: 'Stocks' },
];

export const INDEX_FUNDS = [
  {
    value: 'S&P 500',
    label: <IconLabel icon={<AiOutlineBarChart />} label='S&P 500' />,
    startDate: new Date(1985, 0, 1),
  },
  {
    value: 'NASDAQ-100',
    label: <IconLabel icon={<AiOutlineBarChart />} label='Nasdaq-100' />,
    startDate: new Date(2003, 0, 1),
  },
];

export const CRYPTOCURRENCIES = [
  {
    value: 'BTC',
    label: <IconLabel icon={<SiBitcoin />} label='Bitcoin' />,
    startDate: new Date(2010, 0, 1),
  },
  {
    value: 'ETH',
    label: <IconLabel icon={<FaEthereum />} label='Ethereum' />,
    startDate: new Date(2016, 0, 1),
  },
  {
    value: 'LTC',
    label: <IconLabel icon={<SiLitecoin />} label='Litecoin' />,
    startDate: new Date(2012, 0, 1),
  },
  {
    value: 'XLM',
    label: <IconLabel icon={<SiStellar />} label='Stellar' />,
    startDate: new Date(2015, 0, 1),
  },
];

export const STOCKS = [
  {
    value: 'ADBE',
    label: <IconLabel icon={<SiAdobe />} label='Adobe' />,
    startDate: new Date(1987, 0, 1),
  },
  {
    value: 'AAPL',
    label: <IconLabel icon={<SiApple />} label='Apple' />,
    startDate: new Date(1981, 0, 1),
  },
  {
    value: 'AMZN',
    label: <IconLabel icon={<FaAmazon />} label='Amazon' />,
    startDate: new Date(1998, 0, 1),
  },
  {
    value: 'AMD',
    label: <IconLabel icon={<SiAmd />} label='AMD' />,
    startDate: new Date(1980, 0, 1),
  },
  {
    value: 'CSCO',
    label: <IconLabel icon={<SiCisco />} label='CISCO' />,
    startDate: new Date(1991, 0, 1),
  },
  {
    value: 'DELL',
    label: <IconLabel icon={<SiDell />} label='DELL' />,
    startDate: new Date(1989, 0, 1),
  },
  {
    value: 'EA',
    label: <IconLabel icon={<SiEa />} label='Electronic Arts' />,
    startDate: new Date(1990, 0, 1),
  },
  {
    value: 'GOOGL',
    label: <IconLabel icon={<FaGoogle />} label='Google' />,
    startDate: new Date(2005, 0, 1),
  },
  {
    value: 'IBM',
    label: <IconLabel icon={<SiIbm />} label='IBM' />,
    startDate: new Date(1980, 0, 1),
  },
  {
    value: 'INTL',
    label: <IconLabel icon={<SiIntel />} label='Intel' />,
    startDate: new Date(1980, 0, 1),
  },
  {
    value: 'META',
    label: <IconLabel icon={<IconBrandMeta size={16} />} label='Meta' />,
    startDate: new Date(2013, 0, 1),
  },
  {
    value: 'MSFT',
    label: <IconLabel icon={<FaMicrosoft />} label='Microsoft' />,
    startDate: new Date(1987, 0, 1),
  },
  {
    value: 'NFLX',
    label: <IconLabel icon={<RiNetflixFill />} label='Netflix' />,
    startDate: new Date(2003, 0, 1),
  },
  {
    value: 'ORCL',
    label: <IconLabel icon={<SiOracle />} label='Oracle' />,
    startDate: new Date(1987, 0, 1),
  },
  {
    value: 'PYPL',
    label: <IconLabel icon={<FaPaypal />} label='PayPal' />,
    startDate: new Date(2003, 0, 1),
  },
  {
    value: 'SPOT',
    label: <IconLabel icon={<FaSpotify />} label='Spotify' />,
    startDate: new Date(2019, 0, 1),
  },
  {
    value: 'TSLA',
    label: <IconLabel icon={<SiTesla />} label='Tesla' />,
    startDate: new Date(2011, 0, 1),
  },
  {
    value: 'TWTR',
    label: <IconLabel icon={<FaTwitter />} label='Twitter' />,
    startDate: new Date(2014, 0, 1),
  },
  {
    value: 'UBER',
    label: <IconLabel icon={<FaUber />} label='Uber' />,
    startDate: new Date(2020, 0, 1),
  },
  {
    value: 'ZM',
    label: <IconLabel icon={<SiZoom />} label='ZOOM' />,
    startDate: new Date(2019, 0, 1),
  },
];

export const DATASETS = [
  { label: 'Index funds', options: INDEX_FUNDS },
  { label: 'Cryptocurrencies', options: CRYPTOCURRENCIES },
  { label: 'Stocks', options: STOCKS },
];

export const DATAPOINTS_COUNT_BY_INTERVAL = {
  'minute': 720,
  'day': 365,
  'week': 520,
};

export const MONEY_FORMATTER = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
