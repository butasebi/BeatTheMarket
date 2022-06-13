import {
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
  SiIntel,
  SiLitecoin,
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
  { value: 'S&P 500', label: 'S&P 500' },
  { value: 'NASDAQ-100', label: 'Nasdaq-100' },
];

export const CRYPTOCURRENCIES = [
  { value: 'BTC', label: <IconLabel icon={<SiBitcoin />} label='Bitcoin' /> },
  { value: 'ETH', label: <IconLabel icon={<FaEthereum />} label='Ethereum' /> },
  { value: 'LTC', label: <IconLabel icon={<SiLitecoin />} label='Litecoin' /> },
  { value: 'XLM', label: <IconLabel icon={<SiStellar />} label='Stellar' /> },
];

export const STOCKS = [
  { value: 'ADBE', label: <IconLabel icon={<SiAdobe />} label='Adobe' /> },
  { value: 'AAPL', label: <IconLabel icon={<SiApple />} label='Apple' /> },
  { value: 'AMZN', label: <IconLabel icon={<FaAmazon />} label='Amazon' /> },
  { value: 'AMD', label: <IconLabel icon={<SiAmd />} label='AMD' /> },
  { value: 'GOOGL', label: <IconLabel icon={<FaGoogle />} label='Google' /> },
  { value: 'INTL', label: <IconLabel icon={<SiIntel />} label='Intel' /> },
  {
    value: 'META',
    label: <IconLabel icon={<IconBrandMeta size={16} />} label='Meta' />,
  },
  {
    value: 'MSFT',
    label: <IconLabel icon={<FaMicrosoft />} label='Microsoft' />,
  },
  {
    value: 'NFLX',
    label: <IconLabel icon={<RiNetflixFill />} label='Netflix' />,
  },
  { value: 'PYPL', label: <IconLabel icon={<FaPaypal />} label='PayPal' /> },
  { value: 'SPOT', label: <IconLabel icon={<FaSpotify />} label='Spotify' /> },
  { value: 'TSLA', label: <IconLabel icon={<SiTesla />} label='Tesla' /> },
  { value: 'TWTR', label: <IconLabel icon={<FaTwitter />} label='Twitter' /> },
  { value: 'UBER', label: <IconLabel icon={<FaUber />} label='Uber' /> },
  { value: 'ZM', label: <IconLabel icon={<SiZoom />} label='ZOOM' /> },
];

export const DATASETS = [
  { label: 'Index funds', options: INDEX_FUNDS },
  { label: 'Cryptocurrencies', options: CRYPTOCURRENCIES },
  { label: 'Stocks', options: STOCKS },
];