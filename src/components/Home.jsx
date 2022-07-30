import { Typography, Col, Row, Statistic } from 'antd';


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

        <Row gutter={16} style={{marginTop: 25}}>
          <Col span={12}>
            <Statistic title={"Title Here"} value={9999} />
          </Col>
          <Col span={12}>
            <Statistic title={"Title Here"} value={9999} />
          </Col>
        </Row>

        <Row gutter={16} style={{marginTop: 25}}>
          <Col span={12}>
            <Statistic title={"Title Here"} value={9999} />
          </Col>
          <Col span={12}>
            <Statistic title={"Title Here"} value={9999} />
          </Col>
        </Row>
       </div>
     </section>
     <section className="stats-section">
       <Title level={2}>Top 10 Cryptos in the World</Title>
     </section>
     <section className="latest-news-section">
       <Title level={2}>Latest Crypto News</Title>
     </section>
    </>
  );
};

export default Home;