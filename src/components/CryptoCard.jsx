import { Card, Avatar } from "antd";

const CryptoCard = () => {
  return (
    <Card title={"Coin name goes here"} extra={<Avatar size="large" />} hoverable> 
      <p className="card-stat">Price</p>
      <p className="card-stat">Market Cap</p>
      <p className="card-stat">Daily Change</p>
    </Card>
  );
};

export default CryptoCard;