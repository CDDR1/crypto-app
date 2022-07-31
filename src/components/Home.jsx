import { Typography, Col, Row, Statistic, AutoComplete } from "antd";
import CryptoCard from "./CryptoCard";

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <section className="stats-section">
        <Title level={2}>Global Crypto Stats</Title>
        <div className="crypto-statistics">
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title={"Title Here"} value={9999} />
            </Col>
            <Col span={12}>
              <Statistic title={"Title Here"} value={9999} />
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 25 }}>
            <Col span={12}>
              <Statistic title={"Title Here"} value={9999} />
            </Col>
            <Col span={12}>
              <Statistic title={"Title Here"} value={9999} />
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 25 }}>
            <Col span={12}>
              <Statistic title={"Title Here"} value={9999} />
            </Col>
            <Col span={12}>
              <Statistic title={"Title Here"} value={9999} />
            </Col>
          </Row>
        </div>
      </section>

      <section className="stats-section" style={{ marginTop: 40 }}>
        <Title level={2}>Top 10 Cryptos in the World</Title>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12} xl={6}>
            <CryptoCard />
          </Col>
          <Col xs={24} md={12} xl={6}>
            <CryptoCard />
          </Col>
          <Col xs={24} md={12} xl={6}>
            <CryptoCard />
          </Col>
          <Col xs={24} md={12} xl={6}>
            <CryptoCard />
          </Col>
        </Row>
      </section>

      <section className="latest-news-section" style={{ marginTop: 40 }}>
        <Title level={2}>Latest Crypto News</Title>
      </section>
    </>
  );
};

export default Home;
