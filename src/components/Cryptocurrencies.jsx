import CryptoCard from "./CryptoCard";
import { Row, Col, Typography, Input } from "antd";
import { useGetCoinsQuery } from "../slices/coinsSlice";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import Loader from "./Loader";

const { Title } = Typography;

const Cryptocurrencies = ({ simplified }) => {
  const { data, isFetching } = useGetCoinsQuery();

  const [searchText, setSearchText] = useState("");

  if (isFetching) return <Loader />;

  const coins = simplified ? data.data.coins.slice(0, 10) : data.data.coins;

  const cryptoCards = coins.map((coin) => 
    <Col xs={24} md={12} xl={8} xxl={6} key={coin.uuid}>
      <Link to={`/cryptocurrencies/${coin.uuid}`}>
        <CryptoCard 
          name={coin.name}
          icon={coin.iconUrl}
          price={coin.price}
          marketCap={coin.marketCap}
          dailyChange={coin.change}
        />
      </Link>
    </Col>
  );

  const filteredCards = cryptoCards.filter(cryptoCard => {
    const cryptoCardName = cryptoCard.props.children.props.children.props.name;
    return cryptoCardName.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      {
        !simplified &&
        <div className="page-header">
          <Title level={2}>All Cryptocurrencies</Title>
          <div className="search-input">
            <Input 
              size="large" 
              placeholder="Searh cryptos..." 
              prefix={<SearchOutlined />} 
              className="search-cryptos" 
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
        </div>
      }
      <Row gutter={[32, 32]} className="cards-container">
        {
          filteredCards.length === 0 ? <Title level={3} className="not-found">No cryptocurrencies match the search.</Title> : filteredCards
        }
      </Row>
    </>
  );
};

export default Cryptocurrencies;
