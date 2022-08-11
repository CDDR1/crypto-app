import { Card, Avatar } from "antd";
import millify from "millify";

const CryptoCard = ({ name, icon, price, marketCap, dailyChange }) => {
  return (
    <Card title={name} extra={<Avatar size="large" src={icon} alt="cryptocurrencie icon" />} hoverable> 
      <div className="coin-stat-container">
        <span className="coin-stat coin-price">Price:</span>
        <span>{millify(price)}</span>
      </div>
      <div className="coin-stat-container">
        <span className="coin-stat coin-market-cap">Market Cap:</span>
        <span>{millify(marketCap)}</span>
      </div>
      <div className="coin-stat-container">
        <span className="coin-stat coin-daily-change">Daily Change:</span>
        <span>{`${dailyChange}%`}</span>
      </div>
    </Card>
  );
};

export default CryptoCard;