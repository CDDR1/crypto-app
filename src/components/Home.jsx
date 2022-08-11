import { Typography, Col, Row, Statistic } from "antd";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { useGetCoinsQuery } from "../slices/coinsSlice";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCoinsQuery();
  
  if (isFetching) return "Loading...";

  const globalCryptoStats = data.data.stats;
  console.log(globalCryptoStats);

  return (
    <>
      <section className="stats-section">
        <Title level={2}>Global Crypto Stats</Title>
        <div className="crypto-statistics">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title={"Total Cryptocurrencies"} value={globalCryptoStats.total} />
            </Col>
            <Col span={12}>
              <Statistic title={"Total Exchanges"} value={globalCryptoStats.totalExchanges} />
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 25 }}>
            <Col span={12}>
              <Statistic title={"Total Market Cap"} value={globalCryptoStats.totalMarketCap} />
            </Col>
            <Col span={12}>
              <Statistic title={"Total 24h Volume"} value={globalCryptoStats.total24hVolume} />
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 25 }}>
            <Col span={12}>
              <Statistic title={"Total Coins"} value={globalCryptoStats.totalCoins} />
            </Col>
            <Col span={12}>
              <Statistic title={"Total Markets"} value={globalCryptoStats.totalMarkets} />
            </Col>
          </Row>
        </div>
      </section>

      <section className="top-cryptos-section" style={{ marginTop: 40 }}>
        <Title level={2}>Top 10 Cryptos in the World</Title>
        <Cryptocurrencies />
      </section>

      <section className="latest-news-section" style={{ marginTop: 40 }}>
        <Title level={2}>Latest Crypto News</Title>
        <News />
      </section>
    </>
  );
};

export default Home;
