import { Card, Avatar, Typography } from "antd";
import { FileImageOutlined } from "@ant-design/icons";
import moment from "moment";

const { Title, Text } = Typography;

const NewsCard = ({ name, image, description, providerImg, providerName, datePublished }) => {
  return (
    <Card hoverable style={{height: "auto", minHeight: "325px"}}>
      <div className="news-card-heading">
        <Title level={3} className="news-card-name">{name}</Title>
        <Avatar 
          shape="square" 
          size={120} 
          src={image} 
          icon={<FileImageOutlined />} 
          alt="News thumbnail image" 
        />
      </div>
      <Text className="news-card-description">
        {
          description.length > 150 ? `${description.slice(0, 150)}...` : description
        }
      </Text>
      <div className="news-card-bottom">
        <div className="news-card-provider">
          <Avatar 
            shape="circle" 
            size={40}
            src={providerImg} 
            icon={<FileImageOutlined />} 
            alt="News provider logo"
          />
          <Text>{providerName}</Text>
        </div>
        <Text>{moment(datePublished).fromNow()}</Text>
      </div>
    </Card>
  );
};

export default NewsCard;