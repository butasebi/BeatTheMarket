import Layout from '../components/layout/Layout';
import Game from '../components/game/Game';
import { generateStockData } from '../components/game/dataGenerator';

function Home() {
  const dataTimeInterval = 'day';
  const rawData = generateStockData(dataTimeInterval);

  return (
    <Layout>
      <Game rawData={rawData} dataTimeInterval={dataTimeInterval} />
    </Layout>
  );
}

export default Home;