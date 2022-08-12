import { Card, Avatar, Typography } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import moment from "moment";

const { Title, Text } = Typography;

const NewsCard = ({ name, image, description, providerImg, providerName, datePublished }) => {
  return (
    <Card hoverable style={{height: 325}}>
      <div className="news-card-heading">
        <Title level={3} className="news-card-name">{name}</Title>
        <Avatar 
          shape="square" 
          size={120} 
          src={image} 
          icon={<FileImageOutlined />} 
          alt="News image" 
        />
      </div>
      <Text className="news-card-description">{description}</Text>
      <div className="news-card-bottom">
        <div className="news-card-provider">
          <Avatar 
            shape="circle" 
            size={40}
            src={providerImg} 
            icon={<FileImageOutlined />} 
          />
          <Text>{providerName}</Text>
        </div>
        <Text>{moment(datePublished).fromNow()}</Text>
      </div>
    </Card>
  );
};

export default NewsCard;