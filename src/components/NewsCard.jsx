import { Card, Avatar, Typography } from "antd";

const { Title, Text } = Typography;

const NewsCards = () => {
  return (
    <Card hoverable style={{height: 325}}>
      <div className="news-card-heading">
        <Title level={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at similique ullam.</Title>
        <Avatar shape="square" size={64} />
      </div>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, totam! Quam sint enim blanditiis numquam.</Text>
      <div className="news-card-bottom">
        <div>
          <Avatar />
          <Text>Some News Name</Text>
        </div>
        <Text>publication date</Text>
      </div>
    </Card>
  );
};

export default NewsCards;