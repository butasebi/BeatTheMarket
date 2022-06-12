import Layout from '../components/layout/Layout';
import { generateStockData } from '../components/game/dataGenerator';
import GameMenu from '../components/game/GameMenu';

function Home() {
  const dataTimeInterval = 'day';
  const rawData = generateStockData(dataTimeInterval);

  return (
    <Layout>
      <GameMenu />
    </Layout>
  );
}

export default Home;