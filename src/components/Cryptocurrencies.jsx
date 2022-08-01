import CryptoCard from "./CryptoCard";
import { Row, Col } from "antd";

const CryptoCards = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} md={12} xl={8} xxl={6}>
        <CryptoCard />
      </Col>
      <Col xs={24} md={12} xl={8} xxl={6}>
        <CryptoCard />
      </Col>
      <Col xs={24} md={12} xl={8} xxl={6}>
        <CryptoCard />
      </Col>
      <Col xs={24} md={12} xl={8} xxl={6}>
        <CryptoCard />
      </Col>
    </Row>
  );
};

export default CryptoCards;
