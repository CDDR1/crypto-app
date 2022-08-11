import CryptoCard from "./CryptoCard";
import { Row, Col } from "antd";
import { useGetCoinsQuery } from "../slices/coinsSlice";
import { Link } from "react-router-dom";

const Cryptocurrencies = ({ simplified }) => {
  const { data } = useGetCoinsQuery();

  const coins = simplified ? data.data.coins.slice(0, 10) : data.data.coins;

  return (
    <Row gutter={[32, 32]}>
      {
        coins.map((coin) => 
          <Col xs={24} md={12} xl={8} xxl={6} key={coin.uuid}>
            <Link to={`/cryptocurrencies/:${coin.uuid}`}>
              <CryptoCard 
                name={coin.name}
                icon={coin.iconUrl}
                price={coin.price}
                marketCap={coin.marketCap}
                dailyChange={coin.change}
              />
            </Link>
          </Col>
        )
      }
    </Row>
  );
};

export default Cryptocurrencies;
