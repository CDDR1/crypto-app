import { Row, Col } from "antd";
import NewsCard from "./NewsCard";

const NewsCards = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} xl={12} xxl={8} >
        <NewsCard />
      </Col>
      <Col xs={24} xl={12} xxl={8} >
        <NewsCard />
      </Col>
      <Col xs={24} xl={12} xxl={8} >
        <NewsCard />
      </Col>
      <Col xs={24} xl={12} xxl={8} >
        <NewsCard />
      </Col>
      <Col xs={24} xl={12} xxl={8} >
        <NewsCard />
      </Col>
      <Col xs={24} xl={12} xxl={8} >
        <NewsCard />
      </Col>
    </Row>
  );
};

export default NewsCards;