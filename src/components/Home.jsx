import { Typography, Col, Row, Statistic } from "antd";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import { useGetCoinsQuery } from "../slices/coinsSlice";
import millify from "millify";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCoinsQuery();
  
  if (isFetching) return "Loading...";

  const { total, totalExchanges, totalMarketCap, total24hVolume, totalCoins, totalMarkets } = data.data.stats;

  return (
    <>
      <section className="stats-section">
        <Title level={2}>Global Crypto Stats</Title>
        <div className="crypto-statistics">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title={"Total Cryptocurrencies"} value={total} />
            </Col>
            <Col span={12}>
              <Statistic title={"Total Exchanges"} value={totalExchanges} />
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 25 }}>
            <Col span={12}>
              <Statistic title={"Total Market Cap"} value={`$${millify(totalMarketCap)}`} />
            </Col>
            <Col span={12}>
              <Statistic title={"Total 24h Volume"} value={`$${millify(total24hVolume)}`} />
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 25 }}>
            <Col span={12}>
              <Statistic title={"Total Markets"} value={millify(totalMarkets, {precision: 0})} />
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
