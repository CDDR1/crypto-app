import { Typography, Col, Row, Statistic } from "antd";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "../components/News";
import { useGetCoinsQuery } from "../slices/coinsSlice";
import { useGetNewsQuery } from "../slices/newsSlice";
import millify from "millify";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Home = () => {
  const { data: coins, isFetching: loadingCoins } = useGetCoinsQuery();
  const { data: news, isFetching: loadingNews } = useGetNewsQuery();
  
  if (loadingCoins || loadingNews) return "Loading...";

  const { total, totalExchanges, totalMarketCap, total24hVolume, totalMarkets } = coins.data.stats;

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
        <div className="section-heading">
          <Title level={2} className="section-title">Top 10 Cryptos in The World</Title>
          <Title level={3}><Link to="/cryptocurrencies">Show more</Link></Title>
        </div>
        <Cryptocurrencies simplified={true} />
      </section>

      <section className="latest-news-section" style={{ marginTop: 40 }}>
      <div className="section-heading">
          <Title level={2} className="section-title">Latest Crypto News</Title>
          <Title level={3}><Link to="/news">Show more</Link></Title>
        </div>
        <News simplified={true} />
      </section>
    </>
  );
};

export default Home;
