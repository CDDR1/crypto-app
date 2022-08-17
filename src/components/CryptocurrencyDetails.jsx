import { useParams } from 'react-router-dom';
import { useGetCoinsQuery } from '../slices/coinsSlice';
import { Typography } from 'antd';

const { Title } = Typography;

const CryptocurrencyDetails = () => {
  const { id } = useParams();
  const { data } = useGetCoinsQuery();
  
  const filteredCoin = data.data.coins.filter((coin) => coin.uuid === id);
  const coin = filteredCoin[0];
  console.log(coin)

  return (
    <>
      <div className="details-header">
        <Title level={2}>{`${coin.name} (${coin.symbol}) Price`}</Title>
        <p>{`${coin.name} live price in US Dollar (USD). View value statistics, market cap and supply.`}</p>
      </div>
      <hr />
    </>
  );
}

export default CryptocurrencyDetails;