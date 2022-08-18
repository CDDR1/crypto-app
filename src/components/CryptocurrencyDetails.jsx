import { useParams } from 'react-router-dom';
import { useGetCoinsQuery } from '../slices/coinsSlice';
import { useGetCoinHistoryQuery } from "../slices/coinsSlice";
import { Typography } from 'antd';
import CryptoChart from './CryptoChart';

const { Title } = Typography;

const CryptocurrencyDetails = () => {
  const { id } = useParams();
  const { data } = useGetCoinsQuery();
  const { data: coinHistory } = useGetCoinHistoryQuery();
  console.log(coinHistory.data.history);
  
  const filteredCoin = data.data.coins.filter((coin) => coin.uuid === id);
  const coin = filteredCoin[0];
  // console.log(coin)

  return (
    <>
      <div className="details-header">
        <Title level={2}>{`${coin.name} (${coin.symbol}) Price`}</Title>
        <p>{`${coin.name} live price in US Dollar (USD). View value statistics, market cap and supply.`}</p>
      </div>
      <hr />
      <CryptoChart />
    </>
  );
}

export default CryptocurrencyDetails;